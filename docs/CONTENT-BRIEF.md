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
  flame effects, water, smoke, synced to music, ~20 minutes. Featured on
  national news.
- **2021** — incorporated as Sylvan Ramble Lights, Inc.
- Original mission: *"to support children and youth by providing funds and
  awareness to local initiatives through the joy of the holidays."* Ran Halloween
  and Christmas shows, silent auctions, and drives as fundraisers for **other**
  local nonprofits. 2023 focus was wardrobes and nutritious meals for Tampa Bay
  kids. Raised ~$50,000 cumulatively.
- **2023** — final season of the light show at the Sylvan Ramble location.
- **2024** — pivots to disaster relief after Hurricanes Helene and Milton.
  Emergency shelter, transportation, cleanup support to **50+ families** in the
  first year.
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

## Open questions

- **OPEN** Florida charitable registration number (`CH#####`)?
- **OPEN** Helene/Milton specifics — families served, counties, inspections
  completed, photos. (Facebook blocks scraping; needs an export or a paste.)
- **OPEN** Does the light show come back? Sam mentioned wanting to revive it.
  If so it needs a home in the IA — its own section, or a program page?
- **OPEN** Silent auction: stays on Givebutter, or does the site need its own
  auction surface? Givebutter renders auctions client-side, so lots can't be
  mirrored by scraping.
- **OPEN** Which sponsor URL tree wins, and do redirects need to be preserved
  for the retired one?
- **OPEN** Newsletter — where does the signup currently post to?
