import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  homeLink = this.page.getByRole('link', { name: 'Home' });
  shoppingCartLabel = this.page.locator('.active');
  shoppingCartText: string = 'Shopping Cart';
  deleteProduct = this.page.locator('.cart_quantity_delete .fa ');
  //emptyCart = this.page.getByText('Cart is empty!');
  emptyCart = this.page.locator('.text-center').getByText('Cart is empty!');
  emptyCartText: string = 'Cart is empty!';
  clickHere = this.page.getByRole('link', { name: 'here' });
  quantityProduct3 = this.page.locator('#product-3 .disabled');
  countCartProduct = this.page.locator('.cart_product');
}
