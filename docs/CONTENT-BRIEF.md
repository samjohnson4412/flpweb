# Content brief — working notes

Captured from the live Framer site, the archived Sylvan Ramble Lights site, and
Givebutter (Sept 2026). This is the raw material for the rebuild. Anything marked
**OPEN** needs Sam.

## Organization

- **Florida Lantern Project**, legal entity `Sylvan Ramble Lights, Inc.`
- 501(c)(3) public charity, EIN `86-3574323`
- 4412 W Sylvan Ramble St., Tampa, FL 33609
- info@floridalanternproject.org · (813) 733-8806

### Vision
> We envision a Florida where no family faces disaster alone. Through decisive
> action, we ensure aid reaches those who need it, when they need it, no matter
> the obstacles.

### Mission
> To bring light to communities in times of disaster by providing innovative,
> immediate, and family-centered relief, critical resources, and community-driven
> support.

### Core values
Family-Centered Support · Community-Driven Impact · Breaking Barriers ·
Integrity & Accountability · Innovative Solutions

### Leadership
Samuel Johnson (President) · Dominic Schaefer (Vice-President) ·
Aly Foley (Secretary) · Sandra Jimenez (Board)

## History

- **2015** — Sam Johnson starts a computerized holiday light show at the Sylvan
  Ramble house. Grows into one of the largest in the Tampa area: 17,000+
  individually controllable lights (later described as 200,000+ channels),
  flame effects, water, smoke, synced to music, ~20 minutes. Covered by
  **NBC Nightly News**, Fox 13, WFLA, ABC Action News, Bay News 9, and the
  Tampa Bay Times — see [MEDIA.md](MEDIA.md).
- **2021** — incorporated as Sylvan Ramble Lights, Inc.
- Original mission: *"to support children and youth by providing funds and
  awareness to local initiatives through the joy of the holidays."* Ran Halloween
  and Christmas shows, silent auctions, and drives as fundraisers for **other**
  local nonprofits. 2023 focus was wardrobes and nutritious meals for Tampa Bay
  kids.
- Cumulative light-show results: **$50,000 raised**, **20,000+ unique visitors**,
  thousands each October and December, 500+ on peak nights. Beneficiaries
  included Clothes To Kids ($9,000+ = 180 weekly wardrobes) and Where Love Grows
  ($9,014.45).
- **2023** — final season. The show outgrew a residential property; rather than
  chase a larger venue the team chose to change the mission. (A neighbor
  complaint also features in the Aug 2024 announcement — see the handling note
  in [TESTIMONIALS.md](TESTIMONIALS.md). Recommend not carrying that framing
  onto the site.)
- **2024** — pivots to disaster relief after Hurricanes Helene and Milton.
  **50+ individuals and families** served **on no budget**, via hotel and
  community partnerships: discounted Hilton rooms in Orlando ($68/night with
  breakfast and parking), free eSIM phone plans, free roof and home inspections,
  transportation, cleanup, and 100% pass-through financial aid.
  Full timeline in [DISASTER-RESPONSE.md](DISASTER-RESPONSE.md).
- **2025** — rebrands to Florida Lantern Project. June 7: *Beacons of Hope: A
  Culinary Journey Through Florida* gala (1001 N Florida Ave, Tampa) — raised
  $7,259 of a $50,000 goal from 49 supporters, with a silent auction.
- **2025–26** — *Lanterns for Jamaica* campaign after Hurricane Melissa.

## Programs

- Emergency shelter and transportation
- Cleanup support
- Free roof and home inspections after storms
- Preparedness workshops
- FEMA navigation / guidance
- Supply drives (host-a-drive model for businesses, churches, schools)
- Adopt-a-School (Jamaica)
- Fundraising events: gala + **silent auction** (run on Givebutter)

## Sponsors

~48 in-kind sponsors, each with a name and a donation description
(e.g. "Publix — Donated $100 gift card"). Full list scraped and available.
Notable: Publix, Tampa Bay Lightning, Kendra Scott, The Dalí Museum, Topgolf,
Wawa, ZooTampa, The Florida Aquarium, MOSI, Chipotle, Crossroads Technology.

## Problems with the current site — carry these into the rebuild

1. **Helene and Milton appear nowhere on the live site.** Zero mentions across
   the homepage, about, blog, contact, and Jamaica pages. The Florida disaster
   work that defines the organization — 50+ families — is invisible. This is the
   single biggest content gap.
2. **Duplicate sponsor pages.** Every sponsor exists at both
   `/about/impact/<slug>` and `/sponsors/<slug>`. ~48 pages duplicated. Pick one
   canonical tree in the rebuild.
3. **No homepage meta description**, and `<title>` is bare "Florida Lantern
   Project" — no "Tampa", no "disaster relief".
4. **Footer copyright is stale** (`2021 - 2025`) and shows only the old legal
   name.
5. **Florida Ch. 496 disclosure is incomplete** — missing the toll-free number
   and the CH registration number. **OPEN: need the registration number.**
6. **"Our Impact — Coming Soon!"** on the About page, directly beneath a
   paragraph containing the actual impact numbers.

## Related documents

- [PROGRAMS.md](PROGRAMS.md) — full service catalog, revenue model, budget, board
- [DISASTER-RESPONSE.md](DISASTER-RESPONSE.md) — Helene & Milton, 2024
- [MEDIA.md](MEDIA.md) — press coverage
- [TESTIMONIALS.md](TESTIMONIALS.md) — quotes, with handling notes
- [SITE-MAP.md](SITE-MAP.md) — proposed architecture

## Open questions

See `ASKS.md` for the current list.
