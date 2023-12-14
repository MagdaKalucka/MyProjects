class SingleProductPage {

  get quantityInput () {return cy.get('#quantity')};
  get addToCartButton () {return cy.contains('Add to cart')};
  get nameInput () {return cy.get('#name')};
  get emailInput () {return cy.get('#email')};
  get reiewInput () {return cy.get('#review')};
  name: string = 'User';
  review: string = 'New test review'; 
  get submitButton () {return cy.contains('Submit')};
  get messageLabel () {return cy.contains('Thank you for your review.')};
  messageText = 'Thank you for your review.';

  addReview(
    name: string, 
    email: string, 
    review: string
    ) {
    this.nameInput.type(name);
    this.emailInput.type(email);
    this.reiewInput.type(review);
  }
}
export default SingleProductPage;