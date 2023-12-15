class MainPage {
 
  messageAddText: string = 'Your product has been added to cart.';

  get continueShopping () {return cy.get('.modal-footer .btn')};
  get messageAddLabel () {return cy.get('.modal-body .text-center:first-child')};
  get vievCartLink () {return cy.get('.modal-body .text-center:nth-child(2)')};

  buttonContinueShopping () { this.continueShopping.click()};
}
export default MainPage