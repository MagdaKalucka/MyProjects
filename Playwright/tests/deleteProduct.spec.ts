import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { MainPage } from '../pages/main.page';
import { CartPage } from '../pages/cart.page';

test.describe('Delete product from the cart', () => {
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

  test('Delete produt', async () => {
    //Arrange

    //Act
    await mainPage.product1.click();
    await mainPage.vievCart.click();
    await cartPage.deleteProduct.click();

    //Asert
    await expect(cartPage.emptyCart).toHaveText(cartPage.emptyCartText);
;
  });

  test('Delete product and continue shopping', async () => {
    //Arrange

    //Act
    await mainPage.product1.click();
    await mainPage.vievCart.click();
    await cartPage.deleteProduct.click();
    await cartPage.clickHere.click();

    //Asert
    //await expect(cartPage.shoppingCart).toHaveText(cartPage.shoppingCartText);
  });

  test('Delete product and continue', async () => {
    //Arrange

    //Act
    await mainPage.product1.click();
    await mainPage.vievCart.click();
    await cartPage.deleteProduct.click();
    await cartPage.clickHere.click();

    //Asert
    //await expect(cartPage.shoppingCart).toHaveText(cartPage.shoppingCartText);
  });

});
