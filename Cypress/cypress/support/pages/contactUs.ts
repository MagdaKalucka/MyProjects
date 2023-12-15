import TopNavigationBar from '../components/topNavigationBar';

export class ContactUs {
  topNavigationBar = new TopNavigationBar;

  contactSubject: string = 'test';
  contactMessage:string = 'this is test message';
  messageText: string = 'Success! Your details have been submitted successfully.';
  
  get contactNameInput () {return cy.dataCy('name')};
  get contactEmailInput () {return cy.dataCy('email')};
  get contactSubjectInput () {return cy.dataCy('subject')};
  get contactMessageInput () {return cy.dataCy('message')};
  get submitButton () {return cy.dataCy('submit-button')};
  get alertButton () {return cy.on('dialog', async (dialog) => {
    await dialog.accept();
  })};
  get messageLabel () {return cy.get('#contact-page').contains('Success! Your details have')};
  get home () {return cy.get('.nav .fa').contains('Home')};
}
export default ContactUs;