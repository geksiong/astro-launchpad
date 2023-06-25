import { getCollection } from 'astro:content';

export function generateSlug(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateTagData(tags) {
  let tagData = [];
  tags.forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
}

// Get the entries in the specified collection, for use in getStaticPaths
export async function getCollectionEntries(collection) {
  const collectionEntries = await getCollection(collection);
  return collectionEntries.map(entry => ({
    params: { slug: entry.slug }, props: { entry },
  }));
}

// Get sorted collection entries, for use in getStaticPaths with pagination
export async function getSortedCollectionEntries(collection) {
  const allPosts = await getCollection(collection);
  return allPosts.sort((a, b) => {
    let dateA = new Date(a.data.updated ? a.data.updated : a.data.date).valueOf();
    let dateB = new Date(b.data.updated ? b.data.updated : b.data.date).valueOf();
    return dateB - dateA;
  });
}

// Get all tags in the specified collection
export async function getAllTagsData(collection) {
  const allPosts = await getCollection(collection);
  const allTagsUnique = new Set();

  allPosts.forEach(post => {
    post.data.tags && post.data.tags.map(tag => {
      allTagsUnique.add(tag);
    })
  })

  return generateTagData(allTagsUnique);
}

// Get collection entries grouped by tag
export async function getCollectionEntriesByTag(collection) {
  const sortedPosts = await getSortedCollectionEntries(collection);
  const allTagsUnique = new Set();

  sortedPosts.forEach(post => {
    post.data.tags && post.data.tags.map(tag => {
      allTagsUnique.add(tag);
    })
  })
  const allTagsData = generateTagData(allTagsUnique);

  // map through the tags array
  return allTagsData.map((tag) => {
    // filter the posts that match the given tag
    const posts = sortedPosts.filter((post) => post.data.tags && post.data.tags.includes(tag.name))
    return {
      params: {slug: tag.slug},
      props: {
        tag: tag.name,
        posts: posts
      }
    };
  });
}
