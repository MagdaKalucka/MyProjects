import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { SignUpPage } from '../pages/signUp.page';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { MainPage } from '../pages/main.page';
import { CartPage } from '../pages/cart.page';
import { ProductPage } from '../pages/product.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';

test.describe('Proceed to checkout', () => {
  let loginSignUpPage;
  let email;
  let mainPage;
  let cartPage;
  let signUpPage;
  let productPage;
  let checkoutPage;
  let paymentPage;
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
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);

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

    await productPage.product15.click();
    await mainPage.vievCart.click();
  });

  test.afterEach(async () => {
    await signUpPage.topNavigationBar.deleteAccount.click();
    await signUpPage.continue.click();
  });

  test('Proceed to checkout and and check my product', async () => {
    //Arrange

    //Act
    await cartPage.buttonProceedToCheckout.click();

    //Asert
    await expect(cartPage.textLabel).toHaveText(cartPage.checkoutText);
  });

  test('Proceed to checkout - Place order (successfull)', async () => {
    //Arrange

    //Act
    await cartPage.buttonProceedToCheckout.click();
    await checkoutPage.messageTextarea.fill(checkoutPage.commentToOrder);
    await checkoutPage.placeOrderButton.click();

    await paymentPage.cartData(
      paymentPage.nameOfCard,
      paymentPage.cartNumber,
      paymentPage.cvc,
      paymentPage.expiration,
      paymentPage.expiryYear,
    );

    //Asert
    //await expect(paymentPage.messageSuccessfullyLabel).toHaveText(paymentPage.messageSuccessfulyText);
    await expect(paymentPage.messageCongratulationsLabel).toHaveText(
      paymentPage.messageCongratulationsText,
    );

    //Back to main page
    await paymentPage.continueButton.click();
  });

  test('Proceed to checkout - Place order (unsuccessfull) - Empty name of card', async () => {
    //Arrange
    const nameOfCardEmpty = '';

    //Act
    await cartPage.buttonProceedToCheckout.click();
    await checkoutPage.placeOrderButton.click();

    await paymentPage.cartData(
      nameOfCardEmpty,
      paymentPage.cartNumber,
      paymentPage.cvc,
      paymentPage.expiration,
      paymentPage.expiryYear,
    );

    //Asert
    await expect(paymentPage.nameOfCardInput).toHaveJSProperty(
      'validationMessage',
      loginSignUpPage.missingMessageBrowser,
    );
  });
/* I should write more tests about empty field but each tests will be this same it will only different name of field. */
});
