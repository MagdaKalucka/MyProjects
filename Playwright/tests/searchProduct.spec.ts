import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.page';
import { MainPage } from '../pages/main.page';

test.describe('Search product in product page', () => {
  let productPage: ProductPage;
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    mainPage = new MainPage(page);

    await page.goto('/');
    
    if (await mainPage.popupButton.isVisible())
       {
          await mainPage.popupButton.click();
       }

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
