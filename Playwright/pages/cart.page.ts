import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  home = this.page.getByRole('link', { name: 'Home'});
  shoppingCart = this.page.locator('.active');

  shoppingCartText: string = 'Shopping Cart';
  
}
