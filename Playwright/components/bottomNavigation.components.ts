import { Page } from '@playwright/test';

export class BottomNavigation {
  constructor(private page: Page) {}

  inputSubscription = this.page.getByPlaceholder('Your email address');
  buttonSend = this.page.getByRole('button', { name: '' });
  messageSentText = 'You have been successfully subscribed!';
  messageSentLabel = this.page.locator('#success-subscribe .alert-success');
}
