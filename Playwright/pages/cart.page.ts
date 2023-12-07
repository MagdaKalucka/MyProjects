import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class CartPage {
  constructor(private page: Page) {}
  topNavigationBar = new TopNavigationBar(this.page)

  homeLink = this.page.getByRole('link', { name: 'Home' });
  textLabel = this.page.locator('.active');
  shoppingCartText: string = 'Shopping Cart';
  deleteProduct = this.page.locator('.cart_quantity_delete .fa ');
  //emptyCart = this.page.getByText('Cart is empty!');
  emptyCart = this.page.locator('.text-center').getByText('Cart is empty!');
  emptyCartText: string = 'Cart is empty!';
  clickHereLink = this.page.getByRole('link', { name: 'here' });
  quantityProduct3 = this.page.locator('#product-3 .disabled');
  countCartProduct = this.page.locator('.cart_product');
  proceedToCheckoutButton = this.page.locator('#do_action .btn').getByText('Proceed To Checkout');
  checkoutText = 'Checkout';
  quantityLabel = this.page.locator('.disabled');
  registerLoginLink = this.page.getByRole('link', { name: 'Register / Login' });
}
