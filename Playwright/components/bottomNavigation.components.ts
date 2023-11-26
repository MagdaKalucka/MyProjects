import { Page } from '@playwright/test';

export class BottomNavigation {
  constructor(private page: Page) {}
  inputSubscription = this.page.getByPlaceholder('Your email address');
  buttonSend = this.page.getByRole('button', { name: '' });
  //messageSent = this.page.getByText('You have been successfully');
  messageSent = this.page.locator('#success-subscribe .alert-success');
};
