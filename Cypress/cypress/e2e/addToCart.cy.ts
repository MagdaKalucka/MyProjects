/// <reference types="cypress" />
import SignUpPage from "../support/pages/signUp";
import MainPage from "../support/pages/main";
import CartPage from "../support/pages/cart";
import ProductPage from "../support/pages/product";

const signUpPage = new SignUpPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const productPage = new ProductPage();

describe("Add product to cart", () => {
  beforeEach(function () {
    cy.page();
    signUpPage.fullSignUp();
  });

  afterEach(function () {
    signUpPage.deleteAccount();
  });

  it("Add one products to cart", () => {
    //Arrange

    //Act
    productPage.product1.click();

    //Asert
    mainPage.messageAddLabel.should("have.text", mainPage.messageAddText);

    mainPage.buttonContinueShopping();
  });

  it("Add 3 products to cart", () => {
    //Act
    productPage.product1.click();
    mainPage.buttonContinueShopping();
    productPage.product4.click();
    mainPage.buttonContinueShopping();
    productPage.product15.click();
    mainPage.vievCartLink.click();

    //Asert
    cartPage.textLabel.should("have.text", cartPage.shoppingCartText);
  });

  it("Add products to cart by category", () => {
    //Act
    productPage.sideMenu.women.click();
    productPage.sideMenu.womenDress.click();
    productPage.product3Women.wait(300).click();
    mainPage.buttonContinueShopping();

    productPage.sideMenu.men.click();
    productPage.sideMenu.menJeans.click();
    productPage.product35Men.click();
    mainPage.buttonContinueShopping();

    productPage.sideMenu.kids.click();
    productPage.sideMenu.kidsTopShirts.click();
    productPage.product15.click();
    mainPage.vievCartLink.click();

    //Asert
    cartPage.countCartProduct.should('have.length', 3);
  });

it("Add products to cart by brands", () => {
  //Act
  productPage.sideMenu.polo.click();
  productPage.product8Polo.click();
  mainPage.buttonContinueShopping();

  productPage.sideMenu.madame.click();
  productPage.product38Madame.click();
  mainPage.buttonContinueShopping();

  productPage.sideMenu.babyhug.click();
  productPage.product15.click();
  mainPage.buttonContinueShopping();

  productPage.sideMenu.biba.click();
  productPage.product40Biba.click();
  mainPage.vievCartLink.click();

  // Assert
  cartPage.countCartProduct.then((contain) => {
    expect(contain).to.have.length(4);
  });
});

it("Add 10 the same products", () => {
  //Arrange
  const quantity: number = 10;

  //Act
  productPage.sideMenu.women.click();
  productPage.sideMenu.womenDress.click();

  for (let i = 0; i < quantity; i++) {
    productPage.product3Women.click();
    mainPage.buttonContinueShopping();
  }

  productPage.topNavigationBar.cartLink.click();

  //Assert
  cartPage.quantityProduct3.should("have.text", `${quantity}`);
});

});
