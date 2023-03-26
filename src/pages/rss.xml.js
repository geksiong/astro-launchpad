import rss from '@astrojs/rss';

export async function get(context) {
  const postImportResult = import.meta.glob('./**/*.md', { eager: true });
  const posts = Object.values(postImportResult);
  return rss({
    title: 'website name',
    description: 'website description',
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date
    })),
  });
}
