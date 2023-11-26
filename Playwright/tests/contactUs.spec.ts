import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { ContactUs } from '../pages/contactUs.page';
import { EmailGenerator } from '../test-data/emailGenerator';

test.describe('Contact us page', () => {
  let contactUs;
  let email;
  const userId = loginData.userId;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    contactUs = new ContactUs(page);
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
  });

  test('Successful sent the message- full form', async () => {
    //Arrange
    const message = 'Success! Your details have been submitted successfully.';

    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactName.fill(userId);
    await contactUs.contactEmail.fill(email);
    await contactUs.contactSubject.fill('test');
    await contactUs.contactMessage.fill('this is test message');
    await contactUs.buttonSubmit.click();
    await contactUs.alertButton;

    //Asert
    await expect(contactUs.message).toHaveText(message);
  });

  test('Empty form', async () => {
    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.buttonSubmit.click();

    //Assert
    //await expect().toHaveText('Proszę wypełnić to pole')
    //there should be assert here, but I don`t know how I can find selector and text to tooltip. :)
  });

  test('Form without email', async () => {
    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactName.fill(userId);
    await contactUs.contactSubject.fill('test');
    await contactUs.contactMessage.fill('this is test message');
    await contactUs.buttonSubmit.click();

    //Assert
    //await expect().toHaveText('Proszę wypełnić to pole')
    //there should be assert here, but I don`t know how I can find selector and text to tooltip. :)
  });

  test('Form only with email', async () => {
    //Arrange
    const message = 'Success! Your details have been submitted successfully.';

    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactEmail.fill(email);
    await contactUs.buttonSubmit.click();
    await contactUs.alertButton;

    //Asert
    await expect(contactUs.message).toHaveText(message);
  });

});
