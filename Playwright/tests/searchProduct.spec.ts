import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

test.describe('Search product in product page', () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await page.goto('/');
    await productPage.topNavigationBar.productLink.click();
  });

  test('Search product (successful)', async () => {
    //Arrange

    //Act
    await productPage.searchInput.fill(productPage.productNameText);
    await productPage.searchButton.click();

    //Assert
    await expect(productPage.productTextLabel).toHaveText(productPage.productText);
  });

  test('Search product (unsuccessful)', async () => {
    //Arrange

    //Act
    await productPage.searchInput.fill(productPage.badProductNameText);
    await productPage.searchButton.click();

    //Assert

  });
});
