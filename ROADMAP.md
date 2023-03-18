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
  - [ ] Draft field for articles
  - [ ] Optional tags for articles
  - [ ] Selectable layout template (with default)
- [?] Store media with articles instead of central folder (beta)
- [ ] Integrate site CSS
- [ ] Integrate page previews

### Site templates

- [ ] Provide basic layouts for the contents, but without bringing in any particular web UI or CSS frameworks
- [ ] Provide a very basic baseline CSS just so that it looks decent
- [ ] Site logo and favicon
- [ ] Article layout
- [ ] Article listing page
- [ ] About page
- [ ] Tags listing page
- [ ] PWA configuration


## Notes

- Published date is configured as a datetime, and recorded as UTC. If you want to store date only, it might good to set the date picker to UTC so that everyone sees the same date regardless of where they are.
