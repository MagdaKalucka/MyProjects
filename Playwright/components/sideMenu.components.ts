import { Page } from '@playwright/test';

export class SideMenu {
  constructor(private page: Page) {}

  women = this.page.getByRole('link', { name: ' Women' });
  womenMain = this.page.getByRole('heading', { name: ' Women' });
  //womenDress = this.page.getByRole('link', { name: 'Dress' });
  womenDress = this.page.locator("a[href='/category_products/1']");
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

  polo = this.page.getByRole('link', { name: '(6) Polo' });
  madame = this.page.getByRole('link', { name: '(5) Madame' });
  babyhug = this.page.getByRole('link', { name: '(4) Babyhug' });
  biba = this.page.getByRole('link', { name: '(5) Biba' });
}
