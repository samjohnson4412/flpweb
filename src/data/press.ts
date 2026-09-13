export interface PressItem {
  outlet: string;
  title: string;
  url: string;
  kind: 'broadcast' | 'article';
  note?: string;
}

/** All coverage to date is from the Sylvan Ramble Lights light-show era. */
export const PRESS: PressItem[] = [
  { outlet: 'NBC Nightly News', title: 'National coverage of the light show', url: 'https://www.youtube.com/watch?v=D7Zc7krpvvA', kind: 'broadcast', note: 'with Lester Holt' },
  { outlet: 'ABC Action News', title: 'Sylvan Ramble Lights on air', url: 'https://www.youtube.com/watch?v=NZzsHoEo-CA', kind: 'broadcast' },
  { outlet: 'WFLA', title: 'South Tampa light show', url: 'https://www.youtube.com/watch?v=XXMGnXLwdaw', kind: 'broadcast' },
  { outlet: 'Taste & See Tampa Bay', title: 'Visiting the show', url: 'https://www.youtube.com/watch?v=FceZ2DMhCtM', kind: 'broadcast' },
  { outlet: "BB's Adventures", title: 'Walkthrough of the display', url: 'https://www.youtube.com/watch?v=Hcpmgyvd11w', kind: 'broadcast' },
  { outlet: 'Tampa Bay Times', title: 'Halloween light show raises money for charity', url: 'https://www.tampabay.com/life-culture/entertainment/things-to-do/2021/10/12/south-tampa-halloween-light-show-raises-money-for-charity/', kind: 'article', note: '2021' },
  { outlet: 'Tampa Bay Times', title: 'For popular South Tampa holiday light shows, this is the end', url: 'https://www.tampabay.com/life-culture/entertainment/things-to-do/2023/10/24/tampa-light-show-sylvan-ramble-halloween-christmas/', kind: 'article', note: '2023' },
  { outlet: 'Fox 13', title: 'South Tampa Halloween display lights up lives of kids in need', url: 'https://www.fox13news.com/news/south-tampa-halloween-display-lights-up-lives-of-kids-in-need', kind: 'article' },
  { outlet: 'Fox 13', title: 'South Tampa tradition returns for its final year', url: 'https://www.fox13news.com/news/south-tampa-tradition-returns-for-halloween-christmas-light-shows-in-final-year', kind: 'article' },
  { outlet: 'Bay News 9', title: 'Halloween lights for charity', url: 'https://baynews9.com/fl/tampa/news/2021/10/16/halloween-lights-for-charity', kind: 'article', note: '2021' },
  { outlet: 'Spectrum Local News', title: 'End of the ride for Sylvan Ramble Lights show', url: 'https://spectrumlocalnews.com/nys/buffalo/news/2023/12/08/end-of-the-ride-for-sylvan-ramble-lights-show-', kind: 'article', note: '2023' },
  { outlet: 'ABC Action News', title: 'Raises money for charities during Halloween light show', url: 'https://www.abcactionnews.com/news/region-hillsborough/sylvan-ramble-lights-raises-money-for-charities-during-halloween-light-show', kind: 'article' },
  { outlet: 'WFLA', title: 'South Tampa home shines with Halloween light show', url: 'https://www.wfla.com/top-stories/south-tampa-home-shines-with-halloween-light-show/', kind: 'article' },
  { outlet: 'Tampa Prep', title: 'Alum creates huge light display to benefit charity', url: 'https://tampaprep.org/tampa-prep-alum-creates-huge-light-display-to-benefit-charity/', kind: 'article' },
];
