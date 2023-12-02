import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  home = this.page.getByRole('link', { name: 'Home'});
  shoppingCart = this.page.locator('.active');
shoppingCartText: string = 'Shopping Cart';
deleteProduct = this.page.locator('.cart_quantity_delete .fa ');
emptyCart = this.page.getByText('Cart is empty!');
emptyCartText: string = 'Cart is empty!';
clickHere = this.page.getByRole('link', { name: 'here' });
  
}
