/// <reference types="cypress" />
import LoginData from '../support/loginData';
import SignUpPage from '../support/pages/signUp';
import LoginSignUpPage from '../support/pages/loginSignUp';

const loginSignUpPage = new LoginSignUpPage();
const signUpPage = new SignUpPage();
const userId = LoginData.userId;
const password = LoginData.userPassword;
let email = `userExamples123+${Date.now()}@gmail.com`;

describe('User Login page', () => {
 
 beforeEach(function () {
  
    cy.page();
    loginSignUpPage.topNavigationBar.signupLoginLink.click();
  });

  it('Sign in (successful)', () => {
    //Arrange
    loginSignUpPage.singUp(userId, email);
    signUpPage.singUpSuccefull(
      password,
      signUpPage.day,
      signUpPage.month,
      signUpPage.years,
      signUpPage.name,
      signUpPage.lastName,
      signUpPage.company,
      signUpPage.adress,
      signUpPage.country,
      signUpPage.state,
      signUpPage.city,
      signUpPage.zipCode,
      signUpPage.phone,
    );
    signUpPage.continueButton.click();
    loginSignUpPage.topNavigationBar.logoutLink.click();

    const messageLoggedInUs = `Logged in as ${userId}`;

    //Act
    loginSignUpPage.login(email, password);

    //Assert
    loginSignUpPage.topNavigationBar.loggedInUsLink.should('contain.text', messageLoggedInUs);

    // clean up after test
    signUpPage.topNavigationBar.deleteAccountLink.click();
    signUpPage.continueButton.click();
  });
  
  it('Sign in (unsuccessful) - Uncorrect email', () => {
    //Arrange
    const uncorrectEmail = 'user@gmail.com';

    //Act
    loginSignUpPage.login(uncorrectEmail, password);

    //Assert
    loginSignUpPage.errorMessage.should('have.text', loginSignUpPage.errorMessageText);
  });

  it('Sign in (unsuccessful) - Empty password', () => {
    //Arrange
    const emptyPassword = '{ESC}';

    //Act
    loginSignUpPage.login(email, emptyPassword);

    //Assert
    loginSignUpPage.passwordInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUpPage.valueMissingMessage)

  });

  it('Sign in (unsuccessful) - Uncorrect password', () => {
    //Arrange
    const uncorrectPassword = 'user';

    //Act
    loginSignUpPage.login(email, uncorrectPassword);

    //Assert
   
    loginSignUpPage.errorMessage.should('have.text', loginSignUpPage.errorMessageText);
    });
  });

