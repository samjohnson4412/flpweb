# Open asks

What's still needed, roughly in order of how much it unblocks.

## Blocking — can't build the pages without these

1. **Logo files.** The four logo variants came through as images in chat, not
   files, so they aren't in the repo. Need the actual assets — **SVG preferred**
   (scales, tiny, recolorable in CSS), PNG with transparency as fallback:
   - full horizontal lockup (navy wordmark)
   - reversed lockup (white wordmark, for navy backgrounds)
   - icon only, navy-on-gold
   - icon only, white-on-gold
2. **Photos.** The single biggest visual gap. Specifically:
   - Helene/Milton response — volunteers working, supplies, inspections
   - light show archive — the full-house shots
   - the board / team
   - Jamaica campaign
   Bulk drop into Google Drive works; the connector is live.
3. **Site architecture sign-off** — review [SITE-MAP.md](SITE-MAP.md) before any
   pages get built. Cheap to change now, expensive later.

## Legal / factual — needed before launch

4. **Florida charitable registration number** (`CH#####`). Currently a
   placeholder in `src/consts.ts`. The live site's Ch. 496 disclosure is missing
   both this and the toll-free number.
5. **Did the legal name change complete?** The business plan says the change from
   `Sylvan Ramble Lights, Inc.` to `Florida Lantern Project` was planned for Fall
   2025. The footer still shows the old name. Affects the footer, the state
   registration, and donation receipts.
6. **Sandra Jimenez's title** — Treasurer per the business plan, "Board" per the
   site. Which is current?
7. **Testimonial permissions** — see [TESTIMONIALS.md](TESTIMONIALS.md). Named
   relief testimonials should be cleared or initialed.

## Content — needed to write, not to build

8. **Helene/Milton numbers.** We have the services and the story. Missing the
   counts: how many families, how many inspections, how many hotel nights, which
   counties, dollar value of aid. Numbers are what make a relief page credible.
9. **Jamaica campaign status.** Live campaign — what's the current ask, and how
   is it going? The site should show progress.
10. **Any Helene/Milton-era press.** All current coverage is light-show era.
11. **Impact numbers for the About page** — the "Coming Soon!" block.

## Decisions

12. **Silent auction** — stay on Givebutter (recommended: they handle PCI,
    receipts, tax letters) with the site owning the story, or build an auction
    surface here?
13. **Newsletter** — where does the current signup post to? Need the provider to
    wire the form.
14. **Light show revival** — is "Lanterns of Hope" the plan, and is it happening
    for a specific season? Changes how prominent `/events/lanterns-of-hope` is.
15. **Google Analytics / tracking** — carry anything over from Framer?
16. **Cutover plan** — build the whole site then switch DNS, or run in parallel
    on a subdomain first? (Recommend parallel on `new.floridalanternproject.org`,
    then switch.)

## Nice to have

17. Brand guide, if one exists — exact hex values, type scale, logo clear-space.
18. Anything in flight that isn't public yet, so the IA has room for it.
