import TopNavigationBar from "../components/topNavigationBar";
import BottomNavigation from "../components/bottomNavigation";

class LoginSignUpPage {

  bottomNavigation = new BottomNavigation;
  topNavigationBar = new TopNavigationBar;

  messageUserExistText: string = 'Email Address already exist!';
  errorMessageText: string = 'Your email or password is incorrect!';
  
  //missingMessageBrowser: string = process.env.BROWSER === 'default' ? 'Wypełnij to pole.' : 'Please fill out this field.';
  // missingMessageBrowser() {
  //   if (process.env.BROWSER === 'default'){
  //     return 'Wypełnij to pole.'
  //   } else {
  //     return'Please fill out this field.'
  //   }}
  //   valueMissingMessage: string = this.missingMessageBrowser();

  uncorrectEmail: string = 'userexample123';
  mismatchMessageBrowser: string = process.env.BROWSER === 'default' ? `Uwzględnij znak „@” w adresie e-mail. W adresie „${this.uncorrectEmail}” brakuje znaku „@”.` : `Please include an '@' in the email address. '${this.uncorrectEmail}' is missing an '@'.` ;
  //typeMismatchMessage: string = this.mismatchMessageBrowser
  
  valueMissingMessage = 'Wypełnij to pole.';
  typeMismatchMessage = `Uwzględnij znak „@” w adresie e-mail. W adresie „${this.uncorrectEmail}” brakuje znaku „@”.`

  get nameInput () {return cy.get('[placeholder="Name"]')};
  get emailAddressInput () {return cy.get(".signup-form input[name='email']")};
  get signupButton () {return cy.dataCy('signup-button')};
  get emailLoginInput () {return cy.dataCy('login-email')};
  get passwordInput () {return cy.dataCy('login-password')};
  get loginButton () {return cy.dataCy('login-button')};
  get errorMessage () {return cy.contains('Your email or password is')};
  get messageUserExist () {return cy.contains('Email Address already exist!')};
  
  singUp(userId: string, email: string) {
    this.topNavigationBar.signupLoginLink.click();
    this.nameInput.type(userId);
    this.emailAddressInput.type(email);
    this.signupButton.click();
  }

  login(email: string, password: string) {
    this.emailLoginInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default LoginSignUpPage;
