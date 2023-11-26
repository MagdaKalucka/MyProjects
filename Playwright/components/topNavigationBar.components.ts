import { Page } from '@playwright/test';

export class TopNavigationBar {
  constructor(private page: Page) {}
  buttonSignupLogin =  this.page.getByRole('link', { name: ' Signup / Login' });
  deleteAccount = this.page.getByRole('link', { name: 'Delete Account' });
  logout = this.page.getByRole('link', { name: ' Logout'});
  loggedInUs = this.page.locator('.fa fa-user');
  buttonContactUs = this.page.getByRole('link', { name: ' Contact us' });

}
