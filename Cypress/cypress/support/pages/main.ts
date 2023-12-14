class MainPage {
 
  get continueShopping () {return cy.get('.modal-footer .btn')};
  buttonContinueShopping () { this.continueShopping.click()};
  get messageAddLabel () {return cy.get('.modal-body .text-center:first-child')};
  messageAddText: string = 'Your product has been added to cart.';
  get vievCartLink () {return cy.get('.modal-body .text-center:nth-child(2)')};
}
export default MainPage;