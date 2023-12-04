import { Page } from '@playwright/test';

export class TopNavigationBar {
  constructor(private page: Page) {}

  buttonSignupLogin = this.page.getByRole('link', { name: ' Signup / Login' });
  deleteAccount = this.page.getByRole('link', { name: 'Delete Account' });
  logout = this.page.getByRole('link', { name: ' Logout' });
  loggedInUs = this.page.getByText('Logged in as');
  buttonContactUs = this.page.getByRole('link', { name: ' Contact us' });
  product = this.page.getByRole('link', { name: 'Products' });
  cart = this.page.getByRole('link', { name: ' Cart' });
}
