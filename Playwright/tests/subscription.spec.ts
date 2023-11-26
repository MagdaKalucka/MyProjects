import { test, expect } from '@playwright/test';
import { BottomNavigation } from '../components/bottomNavigation.components';
import { EmailGenerator } from '../test-data/emailGenerator';

test.describe('Subscription', () => {
  let bottomNavigation;

  test.beforeEach(async ({ page }) => {
    bottomNavigation = new BottomNavigation(page);
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

  test('Subscription empty input', async () => {
    //Arrange
  
    //Act
    await bottomNavigation.buttonSend.click();

    //Assert
    //There should be Assert here, but I don`t know how I can find selector and text to tooltip. :)

  });
});
