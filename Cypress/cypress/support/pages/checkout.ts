class CheckoutPage {

  commentToOrder: string = 'test comment';
  paymantText: string = 'Payment';
  
  get messageTextarea () {return cy.get('.form-control')};
  get placeOrderButton () {return cy.get('.btn').contains('Place Order')};
  get paymentLabel () {return cy.get('.heading')};
}
export default CheckoutPage;