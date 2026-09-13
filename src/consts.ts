/** Organization facts, sourced from the live site + IRS/state filings. */
export const ORG = {
  name: 'Florida Lantern Project',
  legalName: 'Florida Lantern Project, Inc.',
  tagline: 'No family should face disaster alone.',
  ein: '86-3574323',
  email: 'info@floridalanternproject.org',
  phone: '(813) 733-8806',
  phoneHref: '+18137338806',
  address: {
    street: '4412 W Sylvan Ramble St.',
    city: 'Tampa',
    region: 'FL',
    postalCode: '33609',
    country: 'US',
  },
  social: {
    facebook: 'https://www.facebook.com/floridalanternproject/',
    instagram: 'https://www.instagram.com/floridalanternproject/',
    givebutter: 'https://givebutter.com/floridalanternproject',
  },
  /**
   * Florida Ch. 496 solicitation disclosure.
   * TODO(sam): the live site omits both the toll-free number and the CH
   * registration number that the statute requires. Confirm the registration
   * number with whoever files the annual renewal, then drop it in here.
   */
  flRegistrationNumber: 'CH#####',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Highlighted call-to-action in the header.
 * Was "Help In Jamaica" — that campaign has concluded. The monthly giving
 * program (named in the 2025 gala script) is the standing priority instead.
 */
export const NAV_CTA = { href: '/give/lantern-keeper', label: 'Become a Lantern Keeper' } as const;
