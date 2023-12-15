/// <reference types="cypress" />
import CheckoutPage from "../support/pages/checkout";
import PaymentPage from "../support/pages/payment";
import LoginData from "../support/loginData";
import SignUpPage from "../support/pages/signUp";
import LoginSignUpPage from "../support/pages/loginSignUp";
import MainPage from "../support/pages/main";
import CartPage from "../support/pages/cart";
import ProductPage from "../support/pages/product";

const loginSignUpPage = new LoginSignUpPage();
const signUpPage = new SignUpPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();
const paymentPage = new PaymentPage();
const userId = LoginData.userId;
const password = LoginData.userPassword;
let email = `userExamples123+${Date.now()}@gmail.com`;

describe("Checkout user not login", () => {
  beforeEach(function () {
    cy.page();
  });

  afterEach(function () {
    signUpPage.topNavigationBar.deleteAccountLink.click();
    signUpPage.continueButton.click();
  });

  it("Proceed to checkout and register user", () => {
    //Arrange

    //Act
    productPage.product15.click();
    mainPage.vievCartLink.click();
    cartPage.proceedToCheckoutButton.click();
    cartPage.registerLoginLink.click();

    loginSignUpPage.singUp(userId, email);
    signUpPage.singUpSuccefull(
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
      signUpPage.phone
    );

    //Assert

    signUpPage.accountCreatedTextLabel.should(
      "have.text",
      signUpPage.accountCreatedText
    );
    signUpPage.congratulationTextLabel.should(
      "have.text",
      signUpPage.congratulationText
    );
    signUpPage.continueButton.click();
  });

  it("Add to cart then register user and buy", () => {
    //Arrange

    //Act
    productPage.product15.click();
    mainPage.vievCartLink.click();
    cartPage.proceedToCheckoutButton.click();
    cartPage.registerLoginLink.click();

    signUpPage.fullSignUp();
    cartPage.topNavigationBar.cartLink.click();
    cartPage.proceedToCheckoutButton.click();
    checkoutPage.messageTextarea.type(checkoutPage.commentToOrder);
    checkoutPage.placeOrderButton.click();

    paymentPage.cartData(
      paymentPage.nameOfCard,
      paymentPage.cartNumber,
      paymentPage.cvc,
      paymentPage.expiration,
      paymentPage.expiryYear
    );

    //Assert
    paymentPage.messageCongratulationsLabel.should(
      "have.text",
      paymentPage.messageCongratulationsText
    );
  });
});
