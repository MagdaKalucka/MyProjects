import { test, expect } from '@playwright/test';
import { loginData } from '../../test-data/login.data';
import { SignUpPage } from '../../pages/signUp.page';
import { LoginSignUpPage } from '../../pages/LoginSignUp.pages';

test.describe('User Login page', () => {
  let loginSignUpPage;
  const suffix = new Date().getTime();
  const email = `userExamples123+${suffix}@gmail.com`;
  const password = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginSignUpPage = new LoginSignUpPage(page);
    const signUpPage = new SignUpPage(page);
    const userId = loginData.userId;

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

  test('successful sign in', async () => {
    
    await loginSignUpPage.login(email, password);
    
  });
  test('uncorrect email - unsuccessful sign in', async () => {
    const uncorrectEmail = 'user@gmail.com';
    
    await loginSignUpPage.login(uncorrectEmail, password);
    await expect(loginSignUpPage.errorMessage).toHaveText(loginSignUpPage.message);
  });

  test('empty password - successful sign in', async () => {
    const emptypassword = '';

    await loginSignUpPage.login(email, emptypassword);
     //it should been here assert but I don`t know how I can find selector and text to tooltip. :) 
  });

  test('uncorrect password - successful sign in', async () => {
    const uncorrectpassword = 'user';

    await loginSignUpPage.login(email, uncorrectpassword);
    await expect(loginSignUpPage.errorMessage).toHaveText(loginSignUpPage.message);
});
});
