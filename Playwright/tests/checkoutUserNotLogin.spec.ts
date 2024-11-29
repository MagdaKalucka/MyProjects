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

test.describe('Checkout user not login', () => {
  let loginSignUpPage: LoginSignUpPage;
  let mainPage: MainPage;
  let cartPage: CartPage;
  let signUpPage: SignUpPage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  let paymentPage: PaymentPage;
  let email;
  const userId = loginData.userId;
  const password = loginData.userPassword;

  test.beforeEach(async ({ page }) => {
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();
    loginSignUpPage = new LoginSignUpPage(page);
    signUpPage = new SignUpPage(page);
    mainPage = new MainPage(page);
    cartPage = new CartPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);

    await page.goto('/');
    await mainPage.popupButton.click();
  });

  test.afterEach(async () => {
    await signUpPage.topNavigationBar.deleteAccountLink.click();
    await signUpPage.continueButton.click();
  });

  test('Proceed to checkout and register user', async () => {
    //Arrange

    //Act
    await productPage.product15.click();
    await mainPage.vievCartLink.click();
    await cartPage.proceedToCheckoutButton.click();
    await cartPage.registerLoginLink.click();

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

    //Assert
    await expect(signUpPage.accountCreatedTextLabel).toHaveText(signUpPage.accountCreatedText);
    await expect(signUpPage.congratulationTextLabel).toHaveText(signUpPage.congratulationText
    );
    await signUpPage.continueButton.click();
  });

  test('Add to cart then register user and buy', async () => {
    //Arrange

    //Act
    await productPage.product15.click();
    await mainPage.vievCartLink.click();
    await cartPage.proceedToCheckoutButton.click();
    await cartPage.registerLoginLink.click();

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
    await cartPage.topNavigationBar.cartLink.click();
    await cartPage.proceedToCheckoutButton.click();
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
    await expect(paymentPage.messageCongratulationsLabel).toHaveText(
      paymentPage.messageCongratulationsText,
    );
  });
});
