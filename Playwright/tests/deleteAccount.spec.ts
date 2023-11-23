import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';

test.describe('User sign up page', () => {
  let loginSignUpPage;
  let signUpPage;
  let email;
  const userId = loginData.userId;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
  });

  test('successful sign up', async () => {
    // Arrange
    const suffix = new Date().getTime();
    const email = `userExamples123+${suffix}@gmail.com`;
    const password = loginData.userPassword;
    const day = '3';
    const month = 'April';
    const years = '1990';
    const name = 'Mark';
    const lastName = 'Jonnson';
    const company = 'Star';
    const adress = 'Morning 6';
    const country = 'Canada';
    const state = 'new';
    const city = 'York';
    const zipCode = '4444';
    const phone = '123456789';

    // Act
    await loginSignUpPage.singUp(userId, email);
    await signUpPage.singUpSuccefull(
      password,
      day,
      month,
      years,
      name,
      lastName,
      company,
      adress,
      country,
      state,
      city,
      zipCode,
      phone,
    );

    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.buttonSignupLogin.click();
    await loginSignUpPage.login(email, password);

    // Assert
    await expect(loginSignUpPage.errorMessage).toHaveText(
      loginSignUpPage.message,
    );
  });
});
