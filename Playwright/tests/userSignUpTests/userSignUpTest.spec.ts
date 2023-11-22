import { test, expect } from '@playwright/test';
import { loginData } from '../../test-data/login.data';
import { SignUpPage } from '../../pages/signUp.page';
import { LoginSignUpPage } from '../../pages/LoginSignUp.pages';

test.describe('User sign up page', () => {
  let loginSignUpPage;
  let signUpPage;
  const userId = loginData.userId;
  const suffix = new Date().getTime();
  const email = `userExamples123+${suffix}@gmail.com`;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
  });

  test('successful sign up', async ({ page }) => {
    // Arrange
    //const loginSignUpPage = new LoginSignUpPage(page);
    //const signUpPage = new SignUpPage(page);
    //const userId = loginData.userId;
    //const suffix = new Date().getTime();
    //const email = `userExamples123+${suffix}@gmail.com`;
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
    const message = 'Your email or password is incorrect!';
    //const messageAccountCreated = 'Account Created!';

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
    await expect(signUpPage.textAccountCreated).toHaveText('Account Created!');
    await expect(signUpPage.textCongratulation).toHaveText(
      'Congratulations! Your new account has been successfully created!',
    );
    await expect(signUpPage.textYouCanNow).toHaveText(
      'You can now take advantage of member privileges to enhance your online shopping experience with us.',
    );

    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
    await signUpPage.topNavigationBar.buttonSignupLogin.click();
    await loginSignUpPage.login(email, password);

    // Assert
    await expect(loginSignUpPage.errorMessage).toHaveText(message);
  });

  test('uncorrect email - unsuccessful sign up', async ({ page }) => {
    const uncorrectEmail = 'userexample';

    await loginSignUpPage.singUp(userId, uncorrectEmail);

    //there could been assert but I don`t know how I can find selector and text to tooltip. :) 
  });

  test('empty user - unsuccessful sign up', async ({ page }) => {
  const emptyUserId = '';

  await loginSignUpPage.singUp(emptyUserId, email);

  //it should been here assert but I don`t know how I can find selector and text to tooltip. :) 

  });
});
