import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../components/emailGenerator';

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
    // const suffix = new Date().getTime();
    // const email = `userExamples123+${suffix}@gmail.com`;
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

    // Assert
    await expect(signUpPage.textAccountCreated).toHaveText('Account Created!');
    await expect(signUpPage.textCongratulation).toHaveText(
      'Congratulations! Your new account has been successfully created!');
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

  test('uncorrect email - unsuccessful sign up', async () => {
    // Arrange
    const uncorrectEmail = 'userexample';

    //Act
    await loginSignUpPage.singUp(userId, uncorrectEmail);

    //there should be assert here, but I don`t know how I can find selector and text to tooltip. :)
  });

  test('empty user - unsuccessful sign up', async () => {
    // Arrange
    const emptyUserId = '';

    //Act
await loginSignUpPage.singUp(emptyUserId, email);

    //there should be assert here, but I don`t know how I can find selector and text to tooltip. :)
  });

  test('user exists - unsuccessful sign up', async () => {

    //Arrange
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
    const messageUserExist = 'Email Address already exist!';

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
    await signUpPage.topNavigationBar.logout.click();
    await loginSignUpPage.singUp(userId, email);

//Assert
    await expect(loginSignUpPage.errorMessageExist).toHaveText(
      messageUserExist,
    );
  });
});