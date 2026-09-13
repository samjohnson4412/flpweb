/** Organization facts, sourced from the live site + IRS/state filings. */
export const ORG = {
  name: 'Florida Lantern Project',
  legalName: 'Sylvan Ramble Lights, Inc.',
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

/** Highlighted call-to-action in the header. Swap as campaigns change. */
export const NAV_CTA = { href: '/jamaica', label: 'Help In Jamaica' } as const;
