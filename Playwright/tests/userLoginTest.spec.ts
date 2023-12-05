import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';

test.describe('User Login page', () => {
  let loginSignUpPage;
  let signUpPage;
  let email;
  const userId = loginData.userId;
  const password = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
    await page.goto('/');
    await loginSignUpPage.topNavigationBar.buttonSignupLogin.click();

  });

  test('Sign in (successful)', async () => {

    //Arrange
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
    await loginSignUpPage.topNavigationBar.logout.click();

    const messageLoggedInUs = `Logged in as ${userId}`;

    //Act
    await loginSignUpPage.login(email, password);

    //Assert
    await expect(loginSignUpPage.topNavigationBar.loggedInUs).toContainText(
      messageLoggedInUs,
    );

    // clean up after test
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
  });
  
  test('Sign in (unsuccessful) - Uncorrect email', async () => {
    //Arrange
    const uncorrectEmail = 'user@gmail.com';

    //Act
    await loginSignUpPage.login(uncorrectEmail, password);

    //Assert
    await expect(loginSignUpPage.errorMessage).toHaveText(
      loginSignUpPage.message,
    );
  });

  test('Sign in (unsuccessful) - Empty password', async () => {
    //Arrange
    const emptyPassword = '';

    //Act
    await loginSignUpPage.login(email, emptyPassword);

    //Assert
    await expect(loginSignUpPage.passwordInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessage,
    );
  });

  test('Sign in (unsuccessful) - Uncorrect password', async () => {
    //Arrange
    const uncorrectpassword = 'user';

    //Act
    await loginSignUpPage.login(email, uncorrectpassword);

    //Assert
    await expect(loginSignUpPage.errorMessage).toHaveText(
      loginSignUpPage.message,
    );
  });
});
