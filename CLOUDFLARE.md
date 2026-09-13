# Deploying to Cloudflare Pages

## Build settings (Workers Builds)

Cloudflare now routes new Git-connected projects through **Workers**, not
Pages. That screen has no "build output directory" field — the output location
comes from `wrangler.jsonc` in this repo instead.

| Field | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Version command | `npx wrangler versions upload` (leave as-is) |
| Root directory | `/` |
| Production branch | `main` |
| Build watch paths — include | `*` |
| Build watch paths — exclude | `node_modules/**, .git/` |

Node 22 is pinned by `.nvmrc`; no environment variable needed.

`wrangler.jsonc` declares `assets.directory = "./dist"`, so the built site is
served straight from Cloudflare's edge with no server code. Validate it locally
any time with:

```bash
npm run build && npx wrangler deploy --dry-run
```

It should report reading ~161 files from the assets directory.

## First deploy

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a
   repository**
2. Pick `samjohnson4412/flpweb`
3. Enter the build settings above
4. **Deploy**

First build takes 2-3 minutes and gives you a `*.workers.dev` URL.

## Production branch

`main` exists and carries the full site. Set it as the production branch in
Cloudflare, and set it as the repository default on GitHub:

Settings → General → Default branch → switch to `main`.

Pushes to `main` redeploy production. With "Builds for non-production branches"
checked, every other branch gets its own preview URL.

## Custom domain

**Do the subdomain first.** `floridalanternproject.org` currently resolves to
Framer. Pointing the apex at Pages replaces those DNS records and takes the
live site down with it, so don't do that until you've clicked through the new
one.

1. Pages project → **Custom domains** → **Set up a domain**
2. Enter `new.floridalanternproject.org`
3. Because the zone is already in this Cloudflare account, the DNS record is
   created for you. SSL is issued within a few minutes.

When you're ready to cut over, add `floridalanternproject.org` and
`www.floridalanternproject.org` the same way. Cloudflare will warn you it's
replacing the existing records — that's the Framer ones, and that's expected.

Keep Framer published for a week or so afterwards in case you need to look
something up. Cancelling the subscription deletes the site.

## What deploys automatically

- `public/_redirects` — the 109 legacy URL redirects. Workers static assets
  reads this file natively, same as Pages did; nothing to configure.
- `dist/sitemap-index.xml` — submit it in Google Search Console after cutover.

## Verifying the redirects after deploy

Once the site is on a URL, spot-check that old links still work:

```bash
SITE=https://<your-worker>.workers.dev
for p in /about/impact/publix /jamaica /blog /gala/sponsors; do
  printf '%-28s ' "$p"
  curl -s -o /dev/null -w '%{http_code} -> %{redirect_url}\n' "$SITE$p"
done
```

Each should return `301` and a sensible destination.

## Before cutover

- [ ] Replace `CH#####` in `src/consts.ts` with the real registration number
- [ ] Point the assistance form at a real handler (`src/pages/help/request.astro`)
- [ ] Create the recurring plan in Givebutter and update the Lantern Keeper link
- [ ] Add photos
- [ ] Submit the sitemap to Google Search Console
