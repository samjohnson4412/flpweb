/**
 * Gala films, produced for Beacons of Hope 2025.
 *
 * The masters live in Google Drive and are far too large to ship from this
 * repo (464 MB, 354 MB, 63 MB against a 25 MB per-file limit on Cloudflare
 * static assets). Upload each to YouTube — unlisted is fine — and paste the
 * eleven-character ID here. Anything without an id simply doesn't render, so
 * the pages stay correct in the meantime.
 */
export interface Video {
  key: string;
  title: string;
  description: string;
  youtubeId: string | null;
  source: string;
}

export const VIDEOS: Record<string, Video> = {
  roadToSafety: {
    key: 'roadToSafety',
    title: "The Road to Safety — Peter's Story",
    description:
      "Peter evacuated a dorm ahead of Hurricane Milton with a cat no shelter would take, and planned to ride out the storm in a car.",
    youtubeId: null,
    source: 'Drive: flp/2_The RoadToSafety.mp4',
  },
  roofs: {
    key: 'roofs',
    title: 'Roofs, Relief & Resilience',
    description:
      'Drone inspections after Milton, and what a written report unlocks for a family facing an insurer.',
    youtubeId: null,
    source: 'Drive: flp/3_Roofs.mp4',
  },
  mayor: {
    key: 'mayor',
    title: 'Mayor Jane Castor on grassroots disaster response',
    description:
      'Recorded for the 2025 Beacons of Hope gala, recognizing community-driven disaster response in Tampa.',
    youtubeId: null,
    source: 'Drive: flp/5_Mayor.mp4',
  },
};
