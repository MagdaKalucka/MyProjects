import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  messageTextarea = this.page.locator('.form-control');
  commentToOrder = 'test comment';
  placeOrderButton = this.page.getByRole('link', { name: 'Place Order' });
  paymentLabel = this.page.locator('.heading');
  paymantText = 'Payment';
}
