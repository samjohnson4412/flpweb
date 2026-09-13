# Image credits and licensing

Every image shipped in this repo is listed here with its source and licence.
**Do not add an image without adding a row.** See the images section of
`CLAUDE.md` for why this file exists.

## In use

| File | Source | Licence | Notes |
| --- | --- | --- | --- |
| `src/assets/photos/light-show-crowd.jpg` | FLP, Google Drive `FLP Media/LightShow/IMG_7822.jpeg` | Owned by FLP | Sylvan Ramble Lights, South Tampa. Crowd on a public street at a public event. |
| `src/assets/photos/mobile-connectivity.jpg` | FLP, Google Drive `FLP Media/Roof Inspections/IMG_2337.jpeg` | Owned by FLP | Satellite uplink on a vehicle roof rack. No identifiable people. |
| `src/assets/photos/roof-inspection-drone.jpg` | FLP, Drive `flp/roof1.jpeg` | Owned by FLP | Overhead drone survey of a damaged tile roof. No people. |
| `src/assets/photos/supply-truck.jpg` | FLP, Drive `flp/IMG_1006.jpeg` | Owned by FLP | Box truck loaded from a supply drive. No people. |
| `src/assets/photos/light-show-audience.jpg` | FLP, Drive `flp/IMG_2885.jpeg` | Owned by FLP | Light show crowd, public event. |
| `src/assets/photos/storm-briefing.jpg` | FLP, Drive `flp/75AB121E-....jpeg` | Owned by FLP | FLP's own briefing graphic over a surge forecast map. |
| `src/assets/photos/storm-aftermath-boat.jpg` | FLP, Drive `flp/IMG_0878.jpeg` | Owned by FLP | Sailboat driven ashore. No people. |
| `src/assets/photos/flood-damage-interior.jpg` | FLP, Drive `flp/IMG_0819.jpeg` | Owned by FLP | Storm-damaged garage interior. No people, no identifying detail. |
| `src/assets/photos/donated-toys.jpg` | FLP, Drive `flp/IMG_1009.jpeg` | Owned by FLP | Box of donated toys. No people. |
| `src/assets/photos/light-show-halloween.jpg` | FLP, Drive `flp/IMG_2886.jpeg` | Owned by FLP | The house under Halloween lighting. No people. |
| `src/assets/photos/wind-gust-forecast.jpg` | NOAA GFS via weathermodels.com, screenshot in Drive `flp/` | US Government work, public domain | NOAA model output is not copyrightable (17 U.S.C. §105). Attributed in the caption. |
| `public/brand/logo-full-navy.png` | FLP, Google Drive `flp/Logo Blue (1).png` | Owned by FLP | Primary lockup. |
| `public/brand/logo-full-white.png` | FLP, Google Drive `flp/Logo White (1).png` | Owned by FLP | Reversed lockup. |
| `public/brand/icon-light.png`, `icon-dark.png` | Previous FLP website | Owned by FLP | Favicons, 64px. |
| `public/brand/og-default.png` | Previous FLP website | Owned by FLP | Open Graph card. |

All source files are capped at 2000px and re-encoded at quality 84; Astro
generates the responsive sizes at build time. Don't commit 5 MB originals.

## Video

The three gala films are too large to ship from this repo — 464 MB, 354 MB and
63 MB against a 25 MB per-file limit on Cloudflare static assets. Upload each
to YouTube (unlisted is fine) and paste the ID into `src/data/videos.ts`. The
`Video` component renders nothing until an id is present, so pages stay correct
until then, and it uses a click-to-load facade so YouTube's scripts and cookies
only load if someone actually presses play.

| File in Drive `flp/` | Goes to | Key in videos.ts |
| --- | --- | --- |
| `2_The RoadToSafety.mp4` | `/response/milton-2024` | `roadToSafety` |
| `3_Roofs.mp4` | `/help/recover` | `roofs` |
| `5_Mayor.mp4` | `/about` | `mayor` |

`1_` and `4_` from the gala running order (*From Lights to Lifelines* and
*Guiding Families to Safety*) are not in the folder yet.

## Still worth pulling from Drive

All owned by FLP, all in `FLP Media`:

| Folder | What's there | Where it would go |
| --- | --- | --- |
| `Mayor/Mayor.mp4` | Mayor Jane Castor's endorsement | `/about`, `/about/transparency` |
| `Hotel Stays/PeterISO.mp3` | Peter's own account, isolated audio | `/response/milton-2024` |
| `Hotel Stays/` | Video from the Hilton placements | `/help/during` |
| `Roof Inspections/` | Drone footage dated 2024-09-27 (Helene) and stills | `/help/recover`, `/response/*` |
| `Hurricane Footage/` | Storm footage | `/response/helene-2024` |
| `LightShow/`, `Old Light Show/` | Show video incl. the YouTube masters | `/events/lanterns-of-hope` |
| `Hotline Stories/` | Hotline material | `/help/during` |
| `Command Central/` | Operations | `/about` |

## Do not use

- `FLP Media/AngryNeighbor/` — relates to the dispute that ended the light
  show. Per the content rules in `CLAUDE.md`, that framing stays off the site.
- Any press photograph from the outlets listed in `docs/MEDIA.md`. Link to
  their coverage; never reproduce their images. This is exactly the category
  that produced the AP claim.

## Reviewed and deliberately not used

| File | Why |
| --- | --- |
| `flp/IMG_1043.jpeg` | **Two young children, faces clearly identifiable.** Needs written parental consent before it goes anywhere public. Strong photo; ask first. |
| `flp/IMG_1044`, `IMG_1045`, `IMG_1047` | Screenshots of private thank-you messages from people FLP helped. No names shown, but they are private correspondence. Would be good content **if** the senders agree — worth asking, they are genuinely moving. |
| `flp/IMG_0760.jpeg` | A screenshot of Sam's own Facebook post rather than a photograph. The drone images inside it are usable; the **FAA authorisation** it mentions is now stated on `/help/recover`. |
| `flp/IMG_1625.jpeg` | Appears to be flight or route tracks across Florida. Unclear what it documents — ask Sam before publishing. |
| `flp/IMG_1018.jpeg` | Volunteer driving, gloved hand on the wheel. Usable, just not needed yet. |

## People in photographs

`light-show-crowd.jpg` shows attendees, including children, at a public
outdoor event FLP hosted and photographed. That is ordinarily fine, and the
image was already published on FLP's own channels. If anyone asks to be
removed, replace the file rather than argue the point.
