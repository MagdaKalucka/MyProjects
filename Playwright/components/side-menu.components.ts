import { Page } from '@playwright/test';

export class TopNavigationBar {
  constructor(private page: Page) {}
  polo = this.page.getByRole('link', { name: '(6) Polo' });
  hm = this.page.getByRole('link', { name: '(5) H&M' });
  madame = this.page.getByRole('link', { name: '(5) Madame' });
  mastHarbour = this.page.getByRole('link', { name: '(3) Mast & Harbour' });
  babyhug = this.page.getByRole('link', { name: '(4) Babyhug' });
  allenSollyJunior = this.page.getByRole('link', {
    name: '(3) Allen Solly Junior',
  });
  kookieKids = this.page.getByRole('link', { name: '(3) Kookie Kids' });
  biba = this.page.getByRole('link', { name: '(5) Biba' });

  women = this.page.getByRole('link', { name: ' Women' });
  womenMain = this.page.getByRole('heading', { name: ' Women' });
  womenDress = this.page.getByRole('link', { name: 'Dress' });
  womenTops = this.page.getByRole('link', { name: 'Tops' });
  womenSaree = this.page.getByRole('link', { name: 'Saree' });

  men = this.page.getByRole('link', { name: ' Men' });
  menMain = this.page.getByRole('heading', { name: ' Men' });
  menTshirts = this.page.getByRole('link', { name: 'Tshirts' });
  menJeans = this.page.getByRole('link', { name: 'Jeans' });

  kids = this.page.getByRole('link', { name: ' Kids' });
  kidsMain = this.page.getByRole('heading', { name: ' Kids' });
  kidsDress = this.page.getByRole('link', { name: 'Dress' });
  kidsTopShirts = this.page.getByRole('link', { name: 'Tops & Shirts' });
}
