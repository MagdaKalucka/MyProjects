import TopNavigationBar from '../components/topNavigationBar';

class CartPage {
  topNavigationBar = new TopNavigationBar;

  get homeLink () {return cy.get('.nav .fa').contains('Home')};
  get textLabel () {return cy.get('.active')};
  shoppingCartText: string = 'Shopping Cart';
  get deleteProduct () {return cy.get('.cart_quantity_delete .fa ')};
  get emptyCart () {return cy.get('.text-center').contains('Cart is empty!')};
  emptyCartText: string = 'Cart is empty!';
  get clickHereLink () {return cy.get('a').contains('here')};
  get quantityProduct3 () {return cy.get('#product-3 .disabled')};
  get countCartProduct () {return cy.get('.cart_product')};
  get proceedToCheckoutButton () {return cy.get('#do_action .btn').contains('Proceed To Checkout')};
  checkoutText: string = 'Checkout';
  get quantityLabel () {return cy.get('.disabled')};
  get registerLoginLink () {return cy.get(`[href="/login"]`).contains('Register / Login')};
}
export default CartPage;
