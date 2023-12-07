import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class ContactUs {
  constructor(private page: Page) {}
  topNavigationBar = new TopNavigationBar(this.page);

  contactNameInput = this.page.getByPlaceholder('Name');
  contactEmailInput = this.page.getByPlaceholder('Email', { exact: true });
  contactSubjectInput = this.page.getByPlaceholder('Subject');
  contactSubject: string = 'test';
  contactMessageInput = this.page.getByPlaceholder('Your Message Here');
  contactMessage:string = 'this is test message';
  submitButton = this.page.getByRole('button', { name: 'Submit' });
  alertButton = this.page.on('dialog', async (dialog) => {
    await dialog.accept();
    //.dismiss
  });
  messageLabel = this.page
    .locator('#contact-page')
    .getByText('Success! Your details have');
  messageText = 'Success! Your details have been submitted successfully.';
  home = this.page.getByRole('link', { name: ' Home' });

}
