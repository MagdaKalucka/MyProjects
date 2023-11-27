import { test, expect } from '@playwright/test';
import { BottomNavigation } from '../components/bottomNavigation.components';
import { EmailGenerator } from '../test-data/emailGenerator';
import { LoginSignUpPage } from '../pages/loginSignUp.page';

test.describe('Subscription', () => {
  let bottomNavigation;
  let loginSignUp;

  test.beforeEach(async ({ page }) => {
    bottomNavigation = new BottomNavigation(page);
    loginSignUp = new LoginSignUpPage(page);

    await page.goto('/');
  });

  test('Subscription successful', async () => {
    //Arrange
    const emailGenerator = new EmailGenerator();
    const email = emailGenerator.generateEmail();
    const message = 'You have been successfully subscribed!';

    //Act
    await bottomNavigation.inputSubscription.fill(email);
    await bottomNavigation.buttonSend.click();

    //Asert
    await expect(bottomNavigation.messageSent).toHaveText(message);
  });

  test('Subscription not full email', async () => {
    //Arrange

    //Act
    await bottomNavigation.inputSubscription.fill(loginSignUp.uncorrectEmail);
    await bottomNavigation.buttonSend.click();

    //Assert
    await expect(bottomNavigation.inputSubscription).toHaveJSProperty(
      'validationMessage',
      loginSignUp.typeMismatchMessage,
    );
  });

  test('Subscription empty input', async () => {
    //Arrange

    //Act
    await bottomNavigation.buttonSend.click();

    await expect(bottomNavigation.inputSubscription).toHaveJSProperty(
      'validationMessage',
      loginSignUp.valueMissingMessage,
    );
  });
});
