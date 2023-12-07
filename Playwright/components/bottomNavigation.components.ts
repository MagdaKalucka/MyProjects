import { Page } from '@playwright/test';

export class BottomNavigation {
  constructor(private page: Page) {}

  subscriptionInput = this.page.getByPlaceholder('Your email address');
  sendButton = this.page.getByRole('button', { name: '' });
  messageSentLabel = this.page.locator('#success-subscribe .alert-success');
  messageSentText = 'You have been successfully subscribed!';
}
