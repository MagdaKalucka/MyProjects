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

};
