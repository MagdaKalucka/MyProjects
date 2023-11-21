import { test, expect } from '@playwright/test';
import { loginData } from '../../test-data/login.data';
import { SignUpPage } from '../../pages/signUp.page';
import { LoginSignUpPage } from '../../pages/LoginSignUp.pages';

  test.describe('User Login page', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('/');
        
    const loginSignUpPage = new LoginSignUpPage(page);
    const signUpPage = new SignUpPage(page);
    const userId = loginData.userId;

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
    const message = 'Your email or password is incorrect!';

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
    });
  });