class PaymentPage {
  paymantText:string = "Payment";
  messageCongratulationsText: string =
  "Congratulations! Your order has been confirmed!";
  messageSuccessfulyText: string = "Your order has been placed successfully!";

  get paymentLabel () {return cy.get(".heading")};
  get nameOfCardInput () {return cy.dataCy("name-on-card")};
  get cardNumberInput () {return cy.dataCy("card-number")};
  get cvcInput () {return cy.dataCy("cvc")};
  get expirationInput () {return cy.get(".card-expiry-month")};
  get expiryYearInput () {return cy.dataCy("expiry-year")};
  get payButton () {return cy.dataCy("pay-button")};
  get messageSuccessfullyLabel () {return cy.get(".alert-success")};
  get messageCongratulationsLabel () {return cy.contains("Congratulations! Your order")};
  get continueButton () {return cy.dataCy("continue-button")};

  nameOfCard = "User test";
  cartNumber = "123456789";
  cvc = "123";
  expiration = "08";
  expiryYear = "2033";

  cartData(
    nameOfCard: string,
    cartNumber: string,
    cvc: string,
    expiration: string,
    expiryYear: string
  ) {
    this.nameOfCardInput.type(nameOfCard);
    this.cardNumberInput.type(cartNumber);
    this.cvcInput.type(cvc);
    this.expirationInput.type(expiration);
    this.expiryYearInput.type(expiryYear);
    this.payButton.click();
  }
}

export default PaymentPage;
