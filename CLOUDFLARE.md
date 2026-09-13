# Deploying to Cloudflare Pages

## Build settings

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (leave blank) |
| Node version | 22 — pinned by `.nvmrc`, no env var needed |

The site is fully static. No adapter, no Workers, no environment variables
required for the build to succeed.

## First deploy

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**
2. Authorize GitHub if prompted, then pick `samjohnson4412/flpweb`
3. Set the production branch (see note below) and the build settings above
4. **Save and Deploy**

The first build takes 2-3 minutes. You get a `*.pages.dev` URL immediately.

## Production branch

The repository currently has only one branch, `claude/loving-albattani-qulm7g`,
which GitHub has made the default. That's a working branch name, not a
production one.

Before connecting Cloudflare, create `main` from it on GitHub:

- GitHub → the repo → branch dropdown → **View all branches** → **New branch**,
  name it `main`, source `claude/loving-albattani-qulm7g`
- Then Settings → General → Default branch → switch to `main`

Cloudflare will then offer `main` as the production branch. Every push to
`main` redeploys production; pushes to any other branch get their own preview
URL automatically.

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

- `public/_redirects` — the 109 legacy URL redirects. Pages reads this file
  natively; nothing to configure.
- `dist/sitemap-index.xml` — submit it in Google Search Console after cutover.

## Verifying the redirects after deploy

Once the site is on a URL, spot-check that old links still work:

```bash
SITE=https://new.floridalanternproject.org
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
