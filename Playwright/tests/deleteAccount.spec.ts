import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';

test.describe('Delete account', () => {
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

  test('Delete account succesfull', async () => {
    // Arrange
    const password = loginData.userPassword;

    // Act
    await loginSignUpPage.singUp(userId, email);
    await signUpPage.singUpSuccefull(
      password,
      signUpPage.day,
      signUpPage.month,
      signUpPage.years,
      signUpPage.name,
      signUpPage.lastName,
      signUpPage.company,
      signUpPage.adress,
      signUpPage.country,
      signUpPage.state,
      signUpPage.city,
      signUpPage.zipCode,
      signUpPage.phone,
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
