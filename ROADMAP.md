# Astro Launchpad Roadmap

The basic concept for this starter is to integrate a minimal Astro Static Site Generator setup with a headless CMS to edit the markdown files, but without making choices about the web UI framework to use. The focus is have enough batteries for you to start running.

## Choice of CMS

For now, Decap CMS (previously known as Netlify) is used as the headless CMS, as it doesn't require a database, and has a (beta) feature to edit files locally.

There is another contender Static CMS which was forked off a couple of months before Decap CMS took over the project. Although it decided to promote several beta features to official features, it had also decided to swap out the Slate editor, apparently for the interim while they figure out what to do.

Depending on how the two CMSes evolve, this starter may still decide to switch.

**Notes**:

- A fix is applied to work around a blocking issue with the Slate editor in current version of Decap CMS.

## Roadmap

### CMS

- [x] Integrate DecapCMS, using local Git Gateway backend
- [x] Media folder
- [x] Site settings: about, locations, google analytics, etc
- [x] Demo collection of articles
  - [x] Draft field for articles
  - [x] Optional tags for articles
  - [ ] Selectable layout template (with default)
- [x] Own media folder for certain collections (beta)
- [?] (not working as desired) Nested articles - e.g. for wiki or documentation site
- [x] Integrate site CSS
- [x] Integrate site favicon
- [ ] Integrate page previews

### Site templates

- [x] Provide basic layouts for the contents, but without bringing in any particular web UI or CSS frameworks
- [x] Provide a very basic baseline CSS just so that it looks decent
- [ ] Site logo & favicon
- [x] Article layout
- [x] Article listing page
- [ ] Wiki / Docs pages
- [ ] About page
- [x] Tags listing page
- [ ] PWA site
- [x] static search engine integration
- [x] RSS feed
- [ ] Social meta tags

### Refactor

- [ ] change `date` to `pubDate` to align better with RSS feeds
- [ ] Convert from pages folder to content collections to fully decouple contents from astro codes

## Other ideas

- light/dark theme toggle
- page transitions using Swup
- (fancy) special layout for presentation content
- (fancy) special layout or component for code blocks
- (fancy) MDX? no editor

## Notes

- ~~Published date is configured as a datetime, and recorded as UTC. If you want to store date only, it might good to set the date picker to UTC so that everyone sees the same date regardless of where they are.~~
- for pagefind to work, run `npm run build` and then `npm run preview` to test the prod build. The dev build will not work.

## Limitations

- media folder does not support subfolders
- if a collection specify its own media folder, it will not be able to pick from the global folder
- nested collections are wonky, and can only work with index files
  - https://github.com/decaporg/decap-cms/issues/4972
  - https://github.com/decaporg/decap-cms/pull/6498
