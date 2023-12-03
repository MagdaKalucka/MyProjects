import { Page } from '@playwright/test';
import { SideMenu } from '../components/side-menu.components';
import { TopNavigationBar } from '../components/topNavigationBar.components';


export class ProductPage {
  constructor(private page: Page) {}

sideMenu = new SideMenu(this.page);
topNavigationBar = new TopNavigationBar(this.page);

search = this.page.locator('.container #search_product');
//search = this.page.getByPlaceholder('Search Product')
buttonSearch = this.page.locator('.container #submit_search');
//buttonSearch = this.page.getByRole('button', { name: '' });
productName = 'frozen';
badProductName = 'yellow';

productTextL = this.page.getByText('Frozen Tops For Kids').nth(1)
productText = 'Frozen Tops For Kids';

selectorProduct(productNumber: number): string {
  const selector = `.features_items .productinfo .btn[data-product-id="${productNumber}"]`;

  return selector;
};


product1 = this.page.locator(this.selectorProduct(1));
product4 = this.page.locator(this.selectorProduct(4));
product15 = this.page.locator(this.selectorProduct(15));
product3Women = this.page.locator(this.selectorProduct(3));
product35Men = this.page.locator(this.selectorProduct(35));
product29Kids = this.page.locator(this.selectorProduct(29));
product8Polo = this.page.locator(this.selectorProduct(8));
product38Madame = this.page.locator(this.selectorProduct(38));
product40Biba = this.page.locator(this.selectorProduct(40));




};
