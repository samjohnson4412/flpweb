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

## Research and decisions

`docs/` holds the source research — org history, programs, stories, press,
strategy, site map, and the open-asks list. Read `docs/ASKS.md` before asking
Sam a question; it may already be answered there.
