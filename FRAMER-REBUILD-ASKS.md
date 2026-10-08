# FLP Framer rebuild: what's still open

Updated October 8, 2026, after your answers. Everything you answered is now built into the Framer branch "FLP rebuild". This list is only what's left.

## Before publishing (these must change)

1. **Florida charitable registration number.** The site shows `CH00000` in two places: the footer disclosure on every page, and Transparency → Organization details. Send the real number and I'll swap both. Don't publish with the placeholder; it's a state-required disclosure.
2. **Home inspector license number.** Transparency → Credentials shows `#000000`.
3. **Form destinations (about 5 minutes in the Framer editor).** I can't set these from my side. For each form, select the form frame, then in the right panel under **Send To** choose **Email** → `info@floridalanternproject.org`:
   - /help/request (assistance requests)
   - /partner (organizations)
   - /give/volunteer (volunteers)
   - /events/lanterns-of-hope (light show mailing list)
   - /contact (newsletter)
4. **Newsletter → Givebutter contacts.** Framer can't write to Givebutter directly. Pick one:
   - **(a)** Send the newsletter form to a Webhook, and have a Zapier zap catch it and run Givebutter's "Create Contact" action. This is automatic.
   - **(b)** Send it to email and add people in Givebutter by hand. Fine at low volume.

## When you have it

5. **A quote from Mayor Castor's video.** YouTube blocks me from pulling captions. Send the line you want and I'll set it as a pull quote above the video on About.
6. **The IRS affirmation letter under the new name**, once it arrives. Transparency currently points people to the IRS search, which is enough until then.
7. **Photos for the two remaining photo slots** (dashed boxes on the site):
   - **/response/isaias-2026: aerial or street-level storm damage on the Gulf Coast.** Your own, or a news or editorial photo you license with paperwork you keep. Never plain stock next to real storm coverage.
   - **/partner: a volunteer with a local partner** (pastor, pantry lead) outside their building. It has to be your own photo of a real partner, with their permission.

## Licensed stock (optional; for mood only, never as "documentation")

If you buy stock, these are the slots where it helps. Each would replace a plain navy header:

| Page | What the image is for | Look for |
|---|---|---|
| /help | "Tell us where you are in the storm" | Dark storm clouds over a Florida neighborhood; no people |
| /give | "Five ways to help" | Warm lantern or porch light at dusk |
| /events | Events landing | Holiday lights, a crowd at night, soft focus (your own light show photos work too) |
| /contact | "Get in touch" | Tampa skyline at blue hour |
| /blog | News | Bay or sky texture, very quiet |

Rule of thumb: stock can set a mood. It must never look like it shows a family we helped or a storm we responded to.

## Decided and done (for the record)

- Framer replaces Cloudflare; the real domain stays on Framer. The work is on a branch until you say "publish."
- Old pages: replaced and unpublished, with redirects.
- Isaias page stays active.
- Bio: the website bio from the other thread, rewritten without pronouns, title "President".
- Board: Samuel Johnson (President), Dominic Schaefer (Vice President), Miqueias Torres de Almeida (Secretary), Sandra Jimenez (Director). Headshots added, and the treasurer isn't mentioned anywhere.
- Phone (813) 733-8806. FAA Part 107 #004295077 is on Transparency.
- Givebutter: Donate → flp-2026-general-icpnek, Lantern Keeper → lantern-keeper-85kbxv. These are easy to swap per season.
- Filings: Transparency links to the IRS and Sunbiz lookups instead of hosting the PDFs, because the PDFs include board members' home addresses and your cell number.
- Legal name change date corrected to January 2026, with state document number N21000004590.
- Videos embedded: Mayor (About), Roof Inspections (After a Storm), The Road to Safety (Milton), and two light show videos (Lanterns of Hope).
- IMG_1043 and the thank-you texts are on the Milton page. The texts are typed out as quotes, with no names.
- Sponsor logos are on the sponsor list and each sponsor's page.
- Press links verified. The 2023 Spectrum piece is relabelled "Bay News 9".
- Peter's update is on Milton and the homepage. The haunted house (300 people on Halloween night) is on Lanterns of Hope.
- Lanterns of Hope stays deliberately vague: no dates, venue or promises.
