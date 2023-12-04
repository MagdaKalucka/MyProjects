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

  test('Successful sign up', async () => {
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
    await expect(signUpPage.textAccountCreated).toHaveText('Account Created!');
    await expect(signUpPage.textCongratulation).toHaveText(
      'Congratulations! Your new account has been successfully created!',
    );
    await expect(signUpPage.textYouCanNow).toHaveText(
      'You can now take advantage of member privileges to enhance your online shopping experience with us.',
    );

    // clean up after test
    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.buttonSignupLogin.click();
    await loginSignUpPage.login(email, password);
  });

  test('Uncorrect email - unsuccessful sign up', async () => {
    // Arrange

    //Act
    await loginSignUpPage.singUp(userId, loginSignUpPage.uncorrectEmail);

    //Assert

    await expect(loginSignUpPage.inputEmail).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.typeMismatchMessageEng,
    );

    // await expect(loginSignUpPage.inputEmail).toHaveJSProperty(
    //   'validationMessage',
    //   loginSignUpPage.typeMismatchMessage,
    // );
  });

  test('Empty email - unsuccessful sign up', async () => {
    // Arrange
    const emptyEmail = '';

    //Act
    await loginSignUpPage.singUp(userId, emptyEmail);

    //Assert
    await expect(loginSignUpPage.inputEmail).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessageEng,
    );

    // await expect(loginSignUpPage.inputEmail).toHaveJSProperty(
    //   'validationMessage',
    //   loginSignUpPage.valueMissingMessage,
    // );
  });

  test('Empty user - unsuccessful sign up', async () => {
    // Arrange
    const emptyUserId = '';

    //Act
    await loginSignUpPage.singUp(emptyUserId, email);

    //Assert
    await expect(loginSignUpPage.inputName).toBeEmpty();
    await expect(loginSignUpPage.buttonSignup).toContainText('Signup');
    await expect(loginSignUpPage.buttonSignup).toBeEnabled();

    await expect(loginSignUpPage.inputPassword).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessageEng,
    );

    // await expect(loginSignUpPage.inputPassword).toHaveJSProperty(
    //   'validationMessage',
    //   loginSignUpPage.valueMissingMessage,
    // );
  });

  test('User exists - unsuccessful sign up', async () => {
    //Arrange
    const password = loginData.userPassword;
    const messageUserExist = 'Email Address already exist!';

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
    await signUpPage.topNavigationBar.logout.click();
    await loginSignUpPage.singUp(userId, email);

    //Assert
    await expect(loginSignUpPage.errorMessageExist).toHaveText(
      messageUserExist,
    );
  });

  test('Empty first name - unsuccessful sign up', async () => {
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
    //This is assert to english version browser.
    await expect(signUpPage.firstNameInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.valueMissingMessageEng,
    );
    //This is assert to polish version browser.
    // await expect(signUpPage.firstNameInput).toHaveJSProperty(
    //   'validationMessage',
    //   loginSignUpPage.valueMissingMessage,
    // );
  });

  /* I should write more tests about empty field but each tests will be this same it will only different name of field. */
});
