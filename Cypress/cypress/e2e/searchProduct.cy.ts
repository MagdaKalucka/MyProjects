/// <reference types="cypress" />

import ProductPage from "../support/pages/product";
const productPage = new ProductPage();

describe("Search product in product page", () => {
  beforeEach(function () {
    cy.page();
    productPage.topNavigationBar.productLink.click();
  });

  it("Search product (successful)", () => {
    //Arrange

    //Act
    productPage.searchInput.type(productPage.productNameText);
    productPage.searchButton.click();

    //Assert
    productPage.productTextLabel.should("have.text", productPage.productText);
  });

  it("Search product (unsuccessful)", () => {
    //Arrange

    //Act
    productPage.searchInput.type(productPage.badProductNameText);
    productPage.searchButton.click();

    //Assert
  });
});
