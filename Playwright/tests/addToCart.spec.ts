import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { MainPage } from '../pages/main.page';
import { CartPage } from '../pages/cart.page';

test.describe('Added product to cart', () => {
  let loginSignUpPage;
  let email;
  let mainPage;
  let cartPage;
  let signUpPage;
  const userId = loginData.userId;
  const password = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
    mainPage = new MainPage(page);
    cartPage = new CartPage(page);

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
  });

  test.afterEach(async () => {
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
  });

  test('Added products to cart', async () => {
    //Arrange

    //Act
    await mainPage.product1.click();

    //Asert
    await expect(mainPage.messageAdded).toHaveText(mainPage.messageAddedText);

    await mainPage.continueShopping.click();
  });

  test('Added three products to card', async () => {
    //Arrange

    //Act
    await mainPage.product1.click();
    await mainPage.continueShopping.click();
    await mainPage.product4.click();
    await mainPage.continueShopping.click();
    await mainPage.product15.click();
    await mainPage.vievCart.click();

    //Asert
    await expect(cartPage.shoppingCart).toHaveText(cartPage.shoppingCartText);
  });

  // test('Added products to card with sidebar menu', async () => {
  //   //Arrange

  //   //Act

  //   //Asert
  
  // });
});
