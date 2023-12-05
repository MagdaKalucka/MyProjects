import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

test.describe('Search product in product page', () => {
  let productPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await page.goto('/');
    await productPage.topNavigationBar.product.click();
  });

  test('Search product (successful)', async () => {
    //Arrange

    //Act
    await productPage.search.fill(productPage.productName);
    await productPage.buttonSearch.click();

    //Assert
    await expect(productPage.productTextL).toHaveText(productPage.productText);
  });

  test('Search product (unsuccessful)', async () => {
    //Arrange

    //Act
    await productPage.search.fill(productPage.badProductName);
    await productPage.buttonSearch.click();

    //Assert

  });
});
