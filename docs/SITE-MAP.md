# Proposed site architecture

Draft for review. The organizing idea comes from the business plan's own
**Before / During / After** disaster framing, which is a better structure than
the current site's flat nav.

Why it works: a visitor arrives in one of three states — preparing, in the middle
of a storm, or picking up the pieces. Matching the IA to their state means nobody
has to translate "what I need" into "which menu item."

## Structure

```
/                         Home
/about                    Story, mission, values, board, impact numbers
/about/press              Media coverage (NBC Nightly News leads)

/help                     Get Help — hub, routed by timeline
  /help/prepare           Before: workshops, readiness kits, weather stations
  /help/during            During: evacuation, lodging, hotline, connectivity
  /help/recover           After: inspections, cleanup, repairs, aid navigation
  /help/request           Intake form (replaces "PM us on Facebook")

/give                     Give — hub, the five gala calls to action
  /give/lantern-keeper    PRIMARY — monthly giving program
  /give/donate            One-time → Givebutter
  /give/sponsor           Corporate/business sponsorship
  /give/volunteer         Volunteer + ambassador program
  /give/supplies          Donate supplies / host a drive / Amazon wishlist
  /give/board             Board service inquiry

/response                 Disaster Response — the archive that's missing today
  /response/helene-2024   Hurricane Helene
  /response/milton-2024   Hurricane Milton
  /response/melissa-2025  Hurricane Melissa (concluded — see note)

/events                   Events — hub
  /events/beacons-of-hope Annual gala + silent auction (→ Givebutter)
  /events/lanterns-of-hope Holiday fundraiser — the light show's successor

/sponsors                 Sponsor wall
/sponsors/<slug>          Individual sponsor (ONE tree — see note)

/news                     Blog
/contact
/privacy-policy
/non-discrimination-policy
```

## Decisions this encodes

**1. `/response` is the spine.** Every disaster gets a permanent, linkable page:
what happened, what we did, who we helped, what it cost, how to help next time.
Helene and Milton get written up retroactively. This is the single biggest
improvement over the current site, and it compounds — in three years it's a
portfolio, and it's what grant reviewers ask for.

**2. One sponsor tree.** Today every sponsor exists at both `/about/impact/<slug>`
and `/sponsors/<slug>`. Keep `/sponsors/`, 301 the other. ~48 duplicate pages
resolved.

**3. `/help/request` replaces "PM us."** A real intake form, so requests are
tracked and reportable instead of buried in a Messenger inbox.

**4. Events are first-class.** The gala and the holiday fundraiser recur annually.
Give them permanent URLs with year archives, so past results accumulate as
evidence rather than vanishing with each Givebutter campaign.

**5. The light show returns as "Lanterns of Hope."** The business plan already
names it. `/events/lanterns-of-hope` is where the 2015–2023 history lives too —
the media coverage, the $50,000, the 20,000+ visitors. The archive and the
revival share one home.

**6. "Help In Jamaica" is no longer the primary CTA.** The Melissa campaign has
wound down. The header CTA becomes **Become a Lantern Keeper** — the monthly
giving program named in the gala script, with a donor match up to $5,000/year.
Recurring revenue is the strategic priority; a concluded campaign in the top-
right corner of every page is not.

**7. Jamaica gets archived honestly, not deleted.** `/response/melissa-2025`
keeps the campaign with a clear "this campaign has concluded" state and whatever
was accomplished. The three current `/jamaica/*` URLs are live in printed
material and social posts, so they redirect there rather than 404. Quietly
deleting a campaign looks worse than closing one out.

## Redirects required

| From | To |
| --- | --- |
| `/about/impact/<slug>` | `/sponsors/<slug>` |
| `/jamaica` | `/response/melissa-2025` |
| `/jamaica/adopt` | `/response/melissa-2025` |
| `/jamaica/host` | `/response/melissa-2025` |
| `/blog/*` | `/news/*` |
| `/gala/sponsors` | `/events/beacons-of-hope` |

Cloudflare Pages handles these with a `public/_redirects` file. Every current URL
must keep working — the `/jamaica` links are live in an active campaign and in
printed material.

**OPEN:** Sam to confirm the shape before any pages get built.
