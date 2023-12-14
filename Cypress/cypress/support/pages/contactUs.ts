import TopNavigationBar from '../components/topNavigationBar';

export class ContactUs {
  topNavigationBar = new TopNavigationBar;

  get contactNameInput () {return cy.dataCy('name')};
  get contactEmailInput () {return cy.dataCy('email')};
  get contactSubjectInput () {return cy.dataCy('subject')};
  contactSubject: string = 'test';
  get contactMessageInput () {return cy.dataCy('message')};
  contactMessage:string = 'this is test message';
  get submitButton () {return cy.dataCy('submit-button')};
  get alertButton () {return cy.on('dialog', async (dialog) => {
    await dialog.accept();
  })};
  get messageLabel () {return cy.get('#contact-page').contains('Success! Your details have')};
  messageText: string = 'Success! Your details have been submitted successfully.';
  get home () {return cy.get('.nav .fa').contains('Home')};
}
export default ContactUs;