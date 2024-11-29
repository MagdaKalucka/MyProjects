import { test, expect } from '@playwright/test';
import { BottomNavigation } from '../components/bottomNavigation.components';
import { EmailGenerator } from '../test-data/emailGenerator';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { MainPage } from '../pages/main.page';

test.describe('Subscription', () => {
  let bottomNavigation: BottomNavigation;
  let loginSignUp: LoginSignUpPage;
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    bottomNavigation = new BottomNavigation(page);
    loginSignUp = new LoginSignUpPage(page);
    mainPage = new MainPage(page)

    await page.goto('/');
    await mainPage.popupButton.click();
  });

  test('Send subscription (successful)', async () => {
    //Arrange
    const emailGenerator = new EmailGenerator();
    const email = emailGenerator.generateEmail();

    //Act
    await bottomNavigation.subscriptionInput.fill(email);
    await bottomNavigation.sendButton.click();

    //Asert
    await expect(bottomNavigation.messageSentLabel).toHaveText(bottomNavigation.messageSentText);
  });

  test('Send subscription (unsuccessful) - Not full email', async () => {
    //Arrange

    //Act
    await bottomNavigation.subscriptionInput.fill(loginSignUp.uncorrectEmail);
    await bottomNavigation.sendButton.click();

    //Assert

    await expect(bottomNavigation.subscriptionInput).toHaveJSProperty(
      'validationMessage',
      loginSignUp.typeMismatchMessage,
    );
  });

  test('Send subscription (unsuccessful) - Empty input', async () => {
    //Arrange

    //Act
    await bottomNavigation.sendButton.click();

    //Assert

    await expect(bottomNavigation.subscriptionInput).toHaveJSProperty(
      'validationMessage',
      loginSignUp.valueMissingMessage,
    );
  });
});
