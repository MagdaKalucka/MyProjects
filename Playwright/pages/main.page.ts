import { Page } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}
  
  continueShopping = this.page.getByRole('button', {
    name: 'Continue Shopping',
  });
  messageAdded = this.page.locator('.modal-body .text-center:first-child');
  messageAddedText: string = 'Your product has been added to cart.';
  vievCart = this.page.locator('.modal-body .text-center:nth-child(2)');
}
