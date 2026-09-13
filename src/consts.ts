/** Organization facts, verified against filings, the business plan, and Sam. */
export const ORG = {
  name: 'Florida Lantern Project',
  legalName: 'Florida Lantern Project, Inc.',
  formerName: 'Sylvan Ramble Lights, Inc.',
  tagline: 'No family should face disaster alone.',
  ein: '86-3574323',
  founded: 2015,
  incorporated: 2021,
  email: 'info@floridalanternproject.org',
  phone: '(813) 733-8806',
  phoneHref: '+18137338806',
  address: {
    street: '6706 Camden Bay Dr, Ste 205',
    city: 'Tampa',
    region: 'FL',
    postalCode: '33635',
    country: 'US',
  },
  social: {
    facebook: 'https://www.facebook.com/floridalanternproject/',
    instagram: 'https://www.instagram.com/floridalanternproject/',
    givebutter: 'https://givebutter.com/floridalanternproject',
  },
  /**
   * Florida Ch. 496 solicitation disclosure.
   * TODO(sam): registration number still needed — it's on the annual renewal.
   * The previous site omitted both this and the toll-free number.
   */
  flRegistrationNumber: 'CH#####',
} as const;

/** Verified impact figures. Every one traceable — see docs/STORIES.md. */
export const STATS = [
  { value: '50+', label: 'individuals and families assisted', note: 'Helene and Milton, 2024' },
  { value: '20+', label: 'placed in emergency lodging', note: 'in the days before Milton made landfall' },
  { value: '$0', label: 'operating budget that year', note: 'delivered entirely through partnerships' },
  { value: '20,000+', label: 'neighbors who came to the light show', note: 'raising ~$50,000 for local charities' },
] as const;

export const BOARD = [
  { name: 'Samuel Johnson', role: 'Director & President' },
  { name: 'Dominic Schaefer', role: 'Director & Vice-President' },
  { name: 'Aly Foley', role: 'Director & Secretary' },
  { name: 'Sandra Jimenez', role: 'Director' },
] as const;

export const NAV = [
  { href: '/help', label: 'Get Help' },
  { href: '/response', label: 'Our Response' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/give', label: 'Give' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Header call-to-action. Was "Help In Jamaica" — that campaign has concluded.
 * Recurring giving is the standing priority: it's the only revenue that
 * doesn't have to be re-earned every year.
 */
export const NAV_CTA = { href: '/give/lantern-keeper', label: 'Become a Lantern Keeper' } as const;

export const FOOTER_NAV = [
  {
    heading: 'Get Help',
    links: [
      { href: '/help/prepare', label: 'Before a storm' },
      { href: '/help/during', label: 'During a storm' },
      { href: '/help/recover', label: 'After a storm' },
      { href: '/help/request', label: 'Request assistance' },
    ],
  },
  {
    heading: 'Give',
    links: [
      { href: '/give/lantern-keeper', label: 'Become a Lantern Keeper' },
      { href: '/give/donate', label: 'Make a donation' },
      { href: '/give/volunteer', label: 'Volunteer' },
      { href: '/give/sponsor', label: 'Sponsor us' },
      { href: '/give/supplies', label: 'Donate supplies' },
    ],
  },
  {
    heading: 'Events',
    links: [
      { href: '/events/lanterns-of-hope', label: 'Lanterns of Hope' },
      { href: '/events/beacons-of-hope', label: 'Beacons of Hope gala' },
      { href: '/sponsors', label: 'Our sponsors' },
    ],
  },
  {
    heading: 'About',
    links: [
      { href: '/about', label: 'Our story' },
      { href: '/about/transparency', label: 'Transparency' },
      { href: '/about/press', label: 'Press' },
      { href: '/news', label: 'News' },
    ],
  },
] as const;
