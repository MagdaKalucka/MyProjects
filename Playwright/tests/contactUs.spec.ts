import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { ContactUs } from '../pages/contactUs.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { LoginSignUpPage } from '../pages/loginSignUp.page';

test.describe('Contact us page', () => {
  let contactUs;
  let email;
  let loginSignUp;
  const userId = loginData.userId;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    contactUs = new ContactUs(page);
    loginSignUp = new LoginSignUpPage(page);
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
  });

  test('Send message (successful) - Full form', async () => {
    //Arrange

    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactName.fill(userId);
    await contactUs.contactEmail.fill(email);
    await contactUs.contactSubject.fill('test');
    await contactUs.contactMessage.fill('this is test message');
    await contactUs.buttonSubmit.click();
    await contactUs.alertButton;

    //Asert
    await expect(contactUs.message).toHaveText(contactUs.messageText);
  });

  test('Send message (unsuccessful) - Empty form', async () => {
    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.buttonSubmit.click();

    //Assert

    await expect(contactUs.contactEmail).toHaveJSProperty(
      'validationMessage',
      loginSignUp.valueMissingMessageEng,
    );

    // await expect(contactUs.contactEmail).toHaveJSProperty(
    //   'validationMessage',
    //   loginSignUp.valueMissingMessage,
    // );
  });

  test('Send message (unsuccessful) - Form without email', async () => {
    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactName.fill(userId);
    await contactUs.contactSubject.fill('test');
    await contactUs.contactMessage.fill('this is test message');
    await contactUs.buttonSubmit.click();

    //Assert

      await expect(contactUs.contactEmail).toHaveJSProperty(
        'validationMessage',
        loginSignUp.valueMissingMessageEng,
      );
    
      // await expect(contactUs.contactEmail).toHaveJSProperty(
      //   'validationMessage',
      //   loginSignUp.valueMissingMessage,
      // );
  });

  test('Send message (unsuccessful) - Form only with email', async () => {
    //Arrange

    //Act
    await contactUs.topNavigationBar.buttonContactUs.click();
    await contactUs.contactEmail.fill(email);
    await contactUs.buttonSubmit.click();
    await contactUs.alertButton;

    //Asert
    await expect(contactUs.message).toHaveText(contactUs.messageText);
  });
});
