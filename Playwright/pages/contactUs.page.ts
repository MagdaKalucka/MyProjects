import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class ContactUs {
  constructor(private page: Page) {}
  topNavigationBar = new TopNavigationBar(this.page);

  contactName = this.page.getByPlaceholder('Name');
  contactEmail = this.page.getByPlaceholder('Email', { exact: true });
  contactSubject = this.page.getByPlaceholder('Subject');
  contactMessage = this.page.getByPlaceholder('Your Message Here');
  buttonSubmit = this.page.getByRole('button', { name: 'Submit' });
  alertButton = this.page.on('dialog', async (dialog) => {
    await dialog.accept();
    //.dismiss
  });
  message = this.page
    .locator('#contact-page')
    .getByText('Success! Your details have');
  messageText = 'Success! Your details have been submitted successfully.';
  home = this.page.getByRole('link', { name: ' Home' });
}
