class CheckoutPage {

  get messageTextarea () {return cy.get('.form-control')};
  commentToOrder: string = 'test comment';
  get placeOrderButton () {return cy.get('.btn').contains('Place Order')};
  get paymentLabel () {return cy.get('.heading')};
  paymantText: string = 'Payment';
}
export default CheckoutPage;