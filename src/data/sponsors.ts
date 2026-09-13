/**
 * In-kind sponsors, as published on the previous site.
 *
 * Deliberately no dollar values: the 2025 auction realized 28% of stated
 * retail, and one item listed at $5,000 sold for $150. Publishing values the
 * market rejects undermines every other number on the site.
 */
export interface Sponsor {
  slug: string;
  name: string;
  gift: string;
}

export const SPONSORS: Sponsor[] = [
  { slug: '1905-family-of-restaurants', name: '1905 Family of Restaurants', gift: 'Donated a $100 Gift Card' },
  { slug: '4-rivers-smoke-house', name: '4 Rivers Smoke House', gift: 'Donated a gift card' },
  { slug: 'abuelo-s-mexican', name: 'Abuelo\'s Mexican', gift: 'Donated a Free Meal Voucher' },
  { slug: 'alessi-bakery', name: 'Alessi Bakery', gift: 'Donated $50 in Gift Cards' },
  { slug: 'barkbox', name: 'BarkBox', gift: 'Donated 1 Bark Box Voucher' },
  { slug: 'bradfort-portraits', name: 'Bradfort Portraits', gift: 'Donated a portrait session with Miami hotel stay included' },
  { slug: 'brew-bus-brewing', name: 'Brew Bus Brewing', gift: 'Donated tickets to the local loop' },
  { slug: 'butterfly-world', name: 'Butterfly World', gift: 'Donated admission tickets' },
  { slug: 'cameron-mitchell-restaurants', name: 'Cameron Mitchell Restaurants', gift: 'Donated $200 gift card' },
  { slug: 'carson-s-photography', name: 'Cason Photography', gift: 'Donated 3 Beach Photoshoots' },
  { slug: 'central-rock-gym', name: 'Central Rock Gym', gift: 'Donated day passes' },
  { slug: 'chipotle', name: 'Chipotle', gift: 'Donated gift cards' },
  { slug: 'cookiegenie', name: 'CookieGenie', gift: 'Donated a $200 Gift Card for a Private Chef' },
  { slug: 'cooper-s-hawk-winery-restaurant', name: 'Cooper\'s Hawk Winery & Restaurant', gift: 'Donated a Lux Wine Tasting for 4' },
  { slug: 'crayola-experience-orlando', name: 'Crayola Experience Orlando', gift: 'Donated $60 in Admission Tickets' },
  { slug: 'crossroads-technology', name: 'Crossroads Technology', gift: 'Donated assortment of tech services' },
  { slug: 'duffy-s-sports-grill', name: 'Duffy\'s Sports Grill', gift: 'Donated a $25 gift card' },
  { slug: 'florida-everblades', name: 'Florida Everblades', gift: 'Donated four season passes' },
  { slug: 'glazer-children-s-museum', name: 'Glazer Children\'s Museum', gift: 'Donated 5 Tickets' },
  { slug: 'gorjana-jewelry', name: 'Gorjana Jewelry', gift: 'Donate $150 gift card' },
  { slug: 'jacksonville-icemen', name: 'Jacksonville Icemen', gift: 'Donated $200 Worth of Game Tickets' },
  { slug: 'keel-farms', name: 'Keel Farms', gift: 'Donated a gift basket' },
  { slug: 'kendrascott', name: 'Kendra Scott', gift: 'Donated a Small Faceted Alex Drop Earring Set' },
  { slug: 'let-s-roam', name: 'Let\'s Roam', gift: 'Donated $200 in Game Vouchers' },
  { slug: 'mayday-ice-cream', name: 'Mayday Ice Cream', gift: 'Donated $20 gift card' },
  { slug: 'mcalister-s-deli', name: 'McAlister\'s Deli', gift: 'Donated two meal vouchers' },
  { slug: 'mosi', name: 'MOSI', gift: 'Donated a 6-Month Membership for 5' },
  { slug: 'oriental-trading', name: 'Oriental Trading', gift: 'Donated a gift card' },
  { slug: 'orlando-family-stage', name: 'Orlando Family Stage', gift: 'Donated $200 in Show Tickets' },
  { slug: 'orlando-science-center', name: 'Orlando Science Center', gift: 'Donated admission tickets' },
  { slug: 'portillo-s', name: 'Portillo\'s', gift: 'Donated one gift basket' },
  { slug: 'prp-wine', name: 'PRP Wine', gift: 'Donated wine tasting' },
  { slug: 'publix', name: 'Publix', gift: 'Donated $100 gift card' },
  { slug: 'sun-king-brewery', name: 'Sun King Brewery', gift: 'Donated four flight experience and a gift basket' },
  { slug: 'tampa-bay-lightning', name: 'Tampa Bay Lightning', gift: 'Donated signed jersey' },
  { slug: 'tampa-theatre', name: 'Tampa Theatre', gift: 'Donated 2 Film Passes' },
  { slug: 'thedalimuseum', name: 'The Dalí Museum', gift: 'Donated 2 General Admission Tickets to The Dalí Museum' },
  { slug: 'the-florida-aquarium', name: 'The Florida Aquarium', gift: 'Donated 4 General Admission Tickets' },
  { slug: 'the-florida-holocaust-museum', name: 'The Florida Holocaust Museum', gift: 'Donated admission tickets' },
  { slug: 'topgolf', name: 'Topgolf', gift: 'Donated $50 of Game Play' },
  { slug: 'total-wine-more', name: 'Total Wine & More', gift: 'Donated a Private Wine Class for 20 People' },
  { slug: 'wawwa', name: 'Wawa', gift: 'Donated a Wawa Gift Basket' },
  { slug: 'wonderworks', name: 'WonderWorks', gift: 'Donated 2 All Access Tickets' },
  { slug: 'xtreme-juice', name: 'Xtreme Juice', gift: 'Donated gift cards' },
  { slug: 'yip-fitness', name: 'YIP Fitness', gift: 'Donate a 1 month subscription' },
  { slug: 'zoo-tampa', name: 'Zoo Tampa', gift: 'Donated 2 General Admission Tickets' },
];
