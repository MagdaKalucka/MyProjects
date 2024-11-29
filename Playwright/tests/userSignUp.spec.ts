import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { MainPage } from '../pages/main.page';

test.describe('User sign up page', () => {
  let loginSignUpPage: LoginSignUpPage;
  let signUpPage: SignUpPage;
  let mainPage: MainPage;
  let email;
  const userId = loginData.userId;

  test.beforeEach(async ({ page }) => {
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
    mainPage = new MainPage(page)
    
    await page.goto('/');
    await mainPage.popupButton.click();
  });

  test('Sign up (successful)', async () => {
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

    // Assert
    await expect(signUpPage.accountCreatedTextLabel).toHaveText(signUpPage.accountCreatedText);
    await expect(signUpPage.congratulationTextLabel).toHaveText(signUpPage.congratulationText);
    await expect(signUpPage.youCanNowTextLabel).toHaveText(signUpPage.youCanNowText);

    // clean up after test
    await signUpPage.continueButton.click();
    await signUpPage.topNavigationBar.deleteAccountLink.click();
    await signUpPage.continueButton.click();
    await signUpPage.topNavigationBar.signupLoginLink.click();
    await loginSignUpPage.login(email, password);
  });

  test('Sign up (unsuccessful) - Uncorrect email', async () => {
    // Arrange

    //Act
    await loginSignUpPage.singUp(userId, loginSignUpPage.uncorrectEmail);

    //Assert
    await expect(loginSignUpPage.emailAddressInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.typeMismatchMessage,
    );
  });

  test('Sign up (unsuccessful) - Empty email', async () => {
    // Arrange
    const emptyEmail = '';

    //Act
    await loginSignUpPage.singUp(userId, emptyEmail);

    //Assert
    await expect(loginSignUpPage.emailAddressInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessage,
    );
  });

  test('Sign up (unsuccessful) - Empty user', async () => {
    // Arrange
    const emptyUserId = '';

    //Act
    await loginSignUpPage.singUp(emptyUserId, email);

    //Assert
    await expect(loginSignUpPage.signupButton).toContainText('Signup');
    await expect(loginSignUpPage.signupButton).toBeEnabled();
    await expect(loginSignUpPage.passwordInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessage,
    );
  });

  test('Sign up (unsuccessful) - User exists', async () => {
    //Arrange
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
    await signUpPage.continueButton.click();
    await signUpPage.topNavigationBar.logoutLink.click();
    await loginSignUpPage.singUp(userId, email);

    //Assert
    await expect(loginSignUpPage.messageUserExist).toHaveText(
      loginSignUpPage.messageUserExistText,
    );
  });

  test('Sign up (unsuccessful) - Empty first name', async () => {
    //Arrange
    const password = loginData.userPassword;
    const emptyFirstName = '';

    // Act
    await loginSignUpPage.singUp(userId, email);
    await signUpPage.singUpSuccefull(
      password,
      signUpPage.day,
      signUpPage.month,
      signUpPage.years,
      emptyFirstName,
      signUpPage.lastName,
      signUpPage.company,
      signUpPage.adress,
      signUpPage.country,
      signUpPage.state,
      signUpPage.city,
      signUpPage.zipCode,
      signUpPage.phone,
    );

    //Assert
    await expect(signUpPage.firstNameInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessage,
    );
  });

  /* I should write more tests about empty field but each tests will be this same it will only different name of field. */
});
