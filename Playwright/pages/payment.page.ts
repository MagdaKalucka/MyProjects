import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  paymentLabel = this.page.locator('.heading');
  paymantText = 'Payment';
  nameOfCardInput = this.page.getByTestId('name-on-card');
  cardNumberInput = this.page.getByTestId('card-number');
  cvcInput = this.page.getByTestId('cvc');
  expirationInput = this.page.locator('.card-expiry-month');
  expiryYearInput = this.page.getByTestId('expiry-year');
  payButton = this.page.getByTestId('pay-button');
  messageSuccessfullyLabel = this.page.locator('.alert-success');
  messageSuccessfulyText = 'Your order has been placed successfully!';
  messageCongratulationsLabel = this.page.getByText('Congratulations! Your order');
  messageCongratulationsText = 'Congratulations! Your order has been confirmed!';
  continueButton = this.page.getByRole('link', {name: 'Continue' });
  nameOfCard = 'User test';
  cartNumber = '123456789';
  cvc = '123';
  expiration = '08';
  expiryYear = '2033';

  async cartData(
    nameOfCard: string,
    cartNumber: string,
    cvc: string,
    expiration: string,
    expiryYear: string,
  ): Promise<void> {
    await this.nameOfCardInput.fill(nameOfCard);
    await this.cardNumberInput.fill(cartNumber);
    await this.cvcInput.fill(cvc);
    await this.expirationInput.fill(expiration);
    await this.expiryYearInput.fill(expiryYear);
    await this.payButton.click();
  }
}
