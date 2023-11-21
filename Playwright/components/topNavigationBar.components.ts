import { Page } from '@playwright/test';

export class TopNavigationBar {
  constructor(private page: Page) {}
  buttonSignupLogin =  this.page.getByRole('link', { name: ' Signup / Login' });
  deleteAccount = this.page.getByRole('link', { name: 'Delete Account' });
}
