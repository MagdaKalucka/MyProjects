import { Page } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}
  continueShopping = this.page.getByRole('button', {
    name: 'Continue Shopping',
  });
  messageAdded = this.page.locator('.modal-body .text-center:first-child');
  messageAddedText: string = 'Your product has been added to cart.';
  product1 = this.page.locator(
    '.features_items .productinfo .btn[data-product-id="1"]',
  );
  product4 = this.page.locator('.carousel-inner .productinfo .btn[data-product-id="4"]');
  vievCart = this.page.locator('.modal-body .text-center:nth-child(2)');
  
}
