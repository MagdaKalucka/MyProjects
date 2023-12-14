/// <reference types="cypress" />
import LoginSignUpPage from '../support/pages/loginSignUp';
import ProductPage from '../support/pages/product';
import SingleProductPage from "../support/pages/singleProduct"
import MainPage from '../support/pages/main';
import CartPage from '../support/pages/cart';

const productPage = new ProductPage();
const singleProductPage = new SingleProductPage();
const loginSignUp = new LoginSignUpPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
let email;

describe('Product page', () => {
  
  beforeEach(function () {
    email = `userExamples123+${Date.now()}@gmail.com`;
    cy.visit('/')

  });

  it('Entry to the product page', () => {
    //Arrange

    //Act
    productPage.viewProduct1.click();

    //Assert
    cy.location().then(url => { expect(url.href).to.eq(
      'https://www.automationexercise.com/product_details/1',)
    });
  });

  it('Change quantity products and add to cart', () => {;
  //Arrange
  const quantity = '12'
  productPage.viewProduct1.click();

  //Act
  singleProductPage.quantityInput.click();
  singleProductPage.quantityInput.clear();
  singleProductPage.quantityInput.type(quantity);
  singleProductPage.addToCartButton.click();
  mainPage.vievCartLink.click();

  //Assert
  cartPage.quantityLabel.should('have.text', quantity);
});

  it('Add review to product (successful)', () => {
    //Arrange
    productPage.viewProduct1.click();

    //Act
    singleProductPage.addReview(
      singleProductPage.name,
      email,
      singleProductPage.review,
    );
    singleProductPage.submitButton.click();

    //Assert
    singleProductPage.messageLabel.should('have.text',
      singleProductPage.messageText)
  });

  it('Add review to product (unsuccessful) - Empty name', () => {
    //Arrange
    const emptyName = '{ESC}';
    productPage.viewProduct1.click();

    //Act
    singleProductPage.addReview(
      emptyName,
      email,
      singleProductPage.review,
    );
    singleProductPage.submitButton.click();

    //Assert
    singleProductPage.nameInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUp.valueMissingMessage)
  });

  it('Add review to product (unsuccessful) - Empty email', () => {
    //Arrange
    const emptyEmail = '{ESC}';
    productPage.viewProduct1.click();

    //Act
    singleProductPage.addReview(
      singleProductPage.name,
      emptyEmail,
      singleProductPage.review,
    );
    singleProductPage.submitButton.click();

    //Assert
    singleProductPage.emailInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUp.valueMissingMessage)
  });

  it('Add review to product (unsuccessful) - Empty review', () => {
    //Arrange
    const emptyReview = '{ESC}';
    productPage.viewProduct1.click();

    //Act
    singleProductPage.addReview(
      singleProductPage.name,
      email,
      emptyReview,
    );
    singleProductPage.submitButton.click();

    //Assert
    singleProductPage.reiewInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUp.valueMissingMessage)
    
  });
});