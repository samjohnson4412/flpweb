# Open asks

What's still needed, roughly in order of how much it unblocks.

## Blocking — can't build the pages without these

1. ~~Logo files~~ — **PARTLY RESOLVED.** Pulled `Logo Blue` and `Logo White`
   (1200×475 PNG) from the Drive `flp` folder into `public/brand/`. Still worth
   having if they exist: **SVG versions** (sharper at any size, recolorable in
   CSS, a fraction of the file size) and the **icon-only** lockups at higher
   resolution than the 64px favicons scraped from the site.
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
5. ~~Legal name~~ — **RESOLVED**: `Florida Lantern Project, Inc.` Updated.
6. ~~Sandra's title~~ — **RESOLVED**: board. **No current treasurer** — this is
   a governance gap sitting directly upstream of the "can't verify EIN" /
   "needs state tax exempt" sponsorship rejections. See STRATEGY.md #1.
7. ~~Story permissions~~ — **RESOLVED**: permission granted. Peter, Maria, and
   Amy can be used by name.
8. **Mayor Castor's endorsement** — recorded for the gala. Can it be used
   publicly, and is there a quotable line?

## Content — needed to write, not to build

9. **The five gala videos.** *From Lights to Lifelines*, *The Road to Safety –
   Peter's Story*, *Roofs, Relief & Resilience*, *Guiding Families to Safety*,
   and the Mayor's video. **Highest-value asset on this list.** Real beneficiary
   video beats anything I can write. Where are the files?
10. ~~Helene/Milton numbers~~ — mostly **RESOLVED** from the gala script: 20+
    placed in emergency lodging before Milton, dozens of inspections, 50+ total
    on a $0 budget. Still useful: counties served, total hotel nights, dollar
    value of aid.
11. ~~Jamaica status~~ — **RESOLVED**: campaign concluded, not continuing. Being
    archived at `/response/melissa-2025` rather than deleted. **Confirm: anything
    to report about what it did accomplish, so the page isn't empty?**
12. **Any Helene/Milton-era press.** All current coverage is light-show era.

## Decisions

13. **Silent auction** — stay on Givebutter (recommended: they handle PCI,
    receipts, tax letters) with the site owning the story, or build an auction
    surface here?
14. **Newsletter** — where does the current signup post to? Need the provider to
    wire the form.
15. **Light show revival** — is "Lanterns of Hope" the plan, and is it happening
    for a specific season? Changes how prominent `/events/lanterns-of-hope` is.
16. **Lantern Keeper** — is the monthly program live on Givebutter now, and is
    the $5,000 donor match still running? It's the new primary CTA.
17. **Google Analytics / tracking** — carry anything over from Framer?
18. **Cutover plan** — build the whole site then switch DNS, or run in parallel
    on a subdomain first? (Recommend parallel on `new.floridalanternproject.org`,
    then switch.)

## Newly raised by the data

19. ~~Auction fulfilment~~ — **RESOLVED**: all items were delivered; the sheet
    was simply never updated.
20. ~~Lantern Keepers from the gala~~ — **RESOLVED: zero.** The program had no
    landing page to send the QR code to. See STRATEGY.md #6.
20a. **Is the $5,000/year matching donor still willing?** It went entirely
    unclaimed. If still live it's the strongest launch mechanic the site has —
    a real deadline and a 2x multiplier. **Highest-value question on this list.**
20b. **Is there an email list anywhere?** Mailchimp, Givebutter contacts, a
    spreadsheet of light show attendees, gala RSVPs? If nothing exists, that is
    the most valuable thing the new site starts building on day one.
21. **Form 990s and the IRS determination letter** — needed for the transparency
    page. Do you have PDFs?

## Nice to have

17. Brand guide, if one exists — exact hex values, type scale, logo clear-space.
18. Anything in flight that isn't public yet, so the IA has room for it.
