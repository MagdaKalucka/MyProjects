/// <reference types="cypress" />
import CheckoutPage from '../support/pages/checkout';
import PaymentPage from '../support/pages/payment';
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

describe('Proceed to checkout', () => {
 
  beforeEach(function () {
   
    cy.page();

    signUpPage.fullSignUp();

    productPage.product15.click();
    mainPage.vievCartLink.click();
  });

  afterEach(function () {
    signUpPage.deleteAccount();
  });

  it('Proceed to checkout and check my product', () => {
    //Arrange

    //Act
    cartPage.proceedToCheckoutButton.click();

    //Asert
    cartPage.textLabel.should('have.text', cartPage.checkoutText);
  });

  it('Place order (successfull)', () => {
    //Arrange

    //Act
    cartPage.proceedToCheckoutButton.click();
    checkoutPage.messageTextarea.type(checkoutPage.commentToOrder);
    checkoutPage.placeOrderButton.click();

    paymentPage.cartData(
      paymentPage.nameOfCard,
      paymentPage.cartNumber,
      paymentPage.cvc,
      paymentPage.expiration,
      paymentPage.expiryYear,
    );

    //Asert
    paymentPage.messageCongratulationsLabel.should('have.text', 
    paymentPage.messageCongratulationsText
    );

    //Back to main page
    paymentPage.continueButton.click();
  });

  it('Place order (unsuccessfull) - Empty name of card', () => {
    //Arrange
    const nameOfCardEmpty = '{ESC}';

    //Act
    cartPage.proceedToCheckoutButton.click();
    checkoutPage.placeOrderButton.click();

    paymentPage.cartData(
      nameOfCardEmpty,
      paymentPage.cartNumber,
      paymentPage.cvc,
      paymentPage.expiration,
      paymentPage.expiryYear,
    );

    //Asert
const text = 'cos tam'
    paymentPage.nameOfCardInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUpPage.valueMissingMessage);
   
  });
/* I should write more tests about empty field but each tests will be this same it will only different name of field. */
});
