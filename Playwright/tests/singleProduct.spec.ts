import { test, expect } from '@playwright/test';
import { LoginSignUpPage } from '../pages/loginSignUp.page';
import { EmailGenerator } from '../test-data/emailGenerator';
import { ProductPage } from '../pages/product.page';
import { SingleProductPage } from '../pages/singleProduct.page';
import { MainPage } from '../pages/main.page';
import { CartPage } from '../pages/cart.page';

test.describe('Product page', () => {
  let loginSignUp: LoginSignUpPage;
  let productPage: ProductPage;
  let singleProductPage: SingleProductPage;
  let mainPage: MainPage;
  let cartPage: CartPage;
  let email;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    singleProductPage = new SingleProductPage(page);
    loginSignUp = new LoginSignUpPage(page);
    mainPage = new MainPage(page);
    cartPage = new CartPage(page);
    const emailGenerator = new EmailGenerator();
    email = emailGenerator.generateEmail();

    await page.goto('/');
  });

  test('Entry to the product page', async ({ page }) => {
    //Arrange

    //Act
    await productPage.viewProduct1.click();

    //Assert
    await expect(page).toHaveURL(
      'https://www.automationexercise.com/product_details/1',
    );
  });

  test('Change quantity products and add to cart', async () => {;
  //Arrange
  const quantity = '12'
  await productPage.viewProduct1.click();

  //Act
  await singleProductPage.quantityInput.click();
  await singleProductPage.quantityInput.clear();
  await singleProductPage.quantityInput.fill(quantity);
  await singleProductPage.addToCartButton.click();
  await mainPage.vievCartLink.click();

  //Assert
  await expect(cartPage.quantityLabel).toHaveText(quantity);
});

  test('Add review to product (successful)', async () => {
    //Arrange
    await productPage.viewProduct1.click();

    //Act
    await singleProductPage.addReview(
      singleProductPage.name,
      email,
      singleProductPage.review,
    );
    await singleProductPage.submitButton.click();

    //Assert
    await expect(singleProductPage.messageLabel).toHaveText(
      singleProductPage.messageText,
    );
  });

  test('Add review to product (unsuccessful) - Empty name', async () => {
    //Arrange
    const emptyName = '';
    await productPage.viewProduct1.click();

    //Act
    await singleProductPage.addReview(
      emptyName,
      email,
      singleProductPage.review,
    );
    await singleProductPage.submitButton.click();

    //Assert
    const validationMessage = await singleProductPage.nameInput.evaluate(
      (element) => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
      },
    );
    await expect(validationMessage).toContain(loginSignUp.valueMissingMessage);
  });

  test('Add review to product (unsuccessful) - Empty email', async () => {
    //Arrange
    const emptyEmail = '';
    await productPage.viewProduct1.click();

    //Act
    await singleProductPage.addReview(
      singleProductPage.name,
      emptyEmail,
      singleProductPage.review,
    );
    await singleProductPage.submitButton.click();

    //Assert
    const validationMessage = await singleProductPage.emailInput.evaluate(
      (element) => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
      },
    );
    await expect(validationMessage).toContain(loginSignUp.valueMissingMessage);
  });

  test('Add review to product (unsuccessful) - Empty review', async () => {
    //Arrange
    const emptyReview = '';
    await productPage.viewProduct1.click();

    //Act
    await singleProductPage.addReview(
      singleProductPage.name,
      email,
      emptyReview,
    );
    await singleProductPage.submitButton.click();

    //Assert
    const validationMessage = await singleProductPage.reiewInput.evaluate(
      (element) => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
      },
    );
    await expect(validationMessage).toContain(loginSignUp.valueMissingMessage);
  });
});
