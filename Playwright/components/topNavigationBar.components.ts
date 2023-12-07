import { Page } from '@playwright/test';

export class TopNavigationBar {
  constructor(private page: Page) {}

  signupLoginLink = this.page.getByRole('link', { name: ' Signup / Login' });
  deleteAccountLink = this.page.getByRole('link', { name: 'Delete Account' });
  logoutLink = this.page.getByRole('link', { name: ' Logout' });
  loggedInUsLink = this.page.getByText('Logged in as');
  contactUsLink = this.page.getByRole('link', { name: ' Contact us' });
  productLink = this.page.getByRole('link', { name: 'Products' });
  cartLink = this.page.getByRole('link', { name: ' Cart' });
}
