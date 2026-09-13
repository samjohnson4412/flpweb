# Working agreements

## Branches

**Push only to `claude/loving-albattani-qulm7g`.**

Do not push to `main` unless Sam asks for it in that session. `main` is the
branch Cloudflare deploys to production, and he controls when it moves.

`main` will therefore fall behind this branch during normal work. That is
expected, not drift to be helpfully corrected.

## Deployment

Cloudflare Workers Builds, not Pages. Config lives in `wrangler.jsonc`;
settings and the cutover sequence are in `CLOUDFLARE.md`. Validate with:

```bash
npm run build && npx wrangler deploy --dry-run
```

## Content rules

These came out of the source material and should not be quietly reversed:

- **No dollar values on sponsor pages.** The 2025 auction realized 28% of
  stated retail; one item listed at $5,000 sold for $150.
- **No matching-gift offer.** The 2025 match went unclaimed and is not live.
- **Beneficiary stories run under real first names** — Peter, Maria, Amy.
  Permission was granted. Peter takes they/them in the source material.
- **Don't blame a neighbor for the light show ending.** The business plan's
  account (outgrew a residential property, chose to change mission) is equally
  true and doesn't age badly.
- **Publish unflattering numbers alongside good ones.** The gala raised $7,259
  against a $9,000 cost and produced zero recurring donors; the site says so.

## Images — read before adding any

FLP has an **open copyright claim**: PicRights/Higbee, on behalf of the
Associated Press, over a single editorial photo that was on the homepage.
Opening demand $1,200; Sam is disputing it down to $50 on the grounds that the
image was never registered, so §412 caps AP at actual damages.

Consequences for this repo:

- **Never add an image without a license you can produce on demand.** Not
  "found it on Google", not a press photo, not a news wire image, not
  something lifted from a Facebook post FLP doesn't own.
- **Record provenance for every image** in `docs/IMAGE-CREDITS.md` — source,
  licence, URL, date. A future claim is answered by that file in minutes
  instead of weeks.
- **Prefer FLP's own photography.** The Google Drive `FLP Media` folder holds
  originals: light show, roof inspections, hotel stays, hurricane footage.
  Owned outright, no licence risk, and more credible than stock.
- **Never use stock imagery as apparent documentation.** A stock photo of
  storm damage or a family in a shelter, placed next to Peter's or Amy's real
  story, reads as a photograph of that event. That is fabricated documentation
  regardless of intent. Stock is acceptable only where it is plainly
  atmospheric — sky, weather, landscape — and captioned so.

## Research and decisions

`docs/` holds the source research — org history, programs, stories, press,
strategy, site map, and the open-asks list. Read `docs/ASKS.md` before asking
Sam a question; it may already be answered there.
