import { Page } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}
  
  continueShopping = this.page.getByRole('button', {
    name: 'Continue Shopping',
  });
  messageAddLabel = this.page.locator('.modal-body .text-center:first-child');
  messageAddText: string = 'Your product has been added to cart.';
  vievCartLink = this.page.locator('.modal-body .text-center:nth-child(2)');
  popupButton = this.page.locator("//p [text()='Consent']");
}
