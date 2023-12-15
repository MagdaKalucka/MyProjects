/// <reference types="cypress" />
import SignUpPage from "../support/pages/signUp";
import MainPage from "../support/pages/main";
import CartPage from "../support/pages/cart";
import ProductPage from "../support/pages/product";

const signUpPage = new SignUpPage();
const mainPage = new MainPage();
const cartPage = new CartPage();
const productPage = new ProductPage();

describe("Delete product from the cart", () => {
  beforeEach(function () {
    cy.page();
    signUpPage.fullSignUp();
  });

  afterEach(function () {
    signUpPage.deleteAccount();
  });

  it("Delete produt", () => {
    //Arrange

    //Act
    productPage.product1.click();
    mainPage.vievCartLink.click();
    cartPage.deleteProduct.click();

    //Assert
    cartPage.emptyCart.then((text) => {
      expect(text).to.have.text(cartPage.emptyCartText);
    });
  });

  it("Delete product and continue shopping", () => {
    //Arrange

    //Act
    productPage.product1.click();
    mainPage.vievCartLink.click();
    cartPage.deleteProduct.click();
    cartPage.clickHereLink.click();

    //Assert
    cy.location().then((url) => {
      expect(url.href).to.eq("https://www.automationexercise.com/products");
    });
  });

  it("Delete 10 the same products", () => {
    //Arrange
    const quantity: number = 10;
    productPage.sideMenu.women.click();
    productPage.sideMenu.womenDress.click();

    for (let i = 0; i < quantity; i++) {
      productPage.product3Women.click();
      mainPage.continueShopping.click();
    }
    productPage.topNavigationBar.cartLink.click();

    //Act
    cartPage.deleteProduct.click();

    //Assert
    cartPage.emptyCart.should("have.text", cartPage.emptyCartText);
  });

  it("Delete 3 products", () => {
    //Arrange
    productPage.sideMenu.women.click();
    productPage.sideMenu.womenDress.click();
    productPage.product3Women.click();
    mainPage.continueShopping.click();

    productPage.sideMenu.men.click();
    productPage.sideMenu.menJeans.click();
    productPage.product35Men.click();
    mainPage.continueShopping.click();

    productPage.sideMenu.kids.click();
    productPage.sideMenu.kidsTopShirts.click();
    productPage.product15.click();
    mainPage.vievCartLink.click();

    let number: number = 2;

    //Act
    for (let i = 0; i < 3; i++) {
      cartPage.deleteProduct.eq(number).click();
      number--;
    }
    cartPage.emptyCart.click();

    //Assert
    cartPage.emptyCart.should("have.text", cartPage.emptyCartText);
  });
});
