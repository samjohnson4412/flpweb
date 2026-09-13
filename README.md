# Florida Lantern Project — website

Rebuild of [floridalanternproject.org](https://floridalanternproject.org),
migrating off Framer to a static Astro site on Cloudflare Pages.

## Status

Scaffold only. Brand tokens, layout shell, header, footer, and SEO plumbing are
in place. Page content is pending — see [`docs/CONTENT-BRIEF.md`](docs/CONTENT-BRIEF.md)
for the research captured from the current site and the open questions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deploy (Cloudflare Pages)

The site is fully static, so no adapter is needed.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 |

The domain is already on Cloudflare, so going live is a Pages project plus
flipping the DNS record — no registrar work.

## Layout

```
public/brand/     logo, favicons, OG image (pulled from the current site)
src/consts.ts     org facts + nav — single source of truth
src/styles/       tokens.css (brand palette/type), global.css
src/layouts/      BaseLayout.astro — head, SEO, structured data
src/components/   Header.astro, Footer.astro
src/pages/        routes
docs/             content brief and research notes
```

Brand colors and fonts were sampled from the live Framer site so the rebuild
stays visually recognizable. Change them in `src/styles/tokens.css`.
