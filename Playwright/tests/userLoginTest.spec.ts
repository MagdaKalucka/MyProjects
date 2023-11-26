import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';


test.describe('User Login page', () => {
  let loginSignUpPage;
  let email;
  const userId = loginData.userId;
  const password = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    const signUpPage = new SignUpPage(page);

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
    await loginSignUpPage.topNavigationBar.logout.click();
  });

  test('Successful sign in', async () => {
    //Arrange
    const messageLoggedInUs = `Logged in as ${userId} `;

    //Act
    await loginSignUpPage.login(email, password);

    //Assert
  });
  test('Uncorrect email - unsuccessful sign in', async () => {
    //Arrange
    const uncorrectEmail = 'user@gmail.com';

    //Act
    await loginSignUpPage.login(uncorrectEmail, password);

    //Assert
    await expect(loginSignUpPage.errorMessage).toHaveText(
      loginSignUpPage.message,
    );
  });

  test('Empty password - successful sign in', async () => {
    //Arrange
    const emptypassword = '';

    //Act
    await loginSignUpPage.login(email, emptypassword);

    //There should be Assert here, but I don`t know how I can find selector and text to tooltip. :)
  });

  test('Uncorrect password - successful sign in', async () => {
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
