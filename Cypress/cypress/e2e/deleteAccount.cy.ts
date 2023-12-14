/// <reference types="cypress" />
import LoginData from "../support/loginData";
import SignUpPage from "../support/pages/signUp";
import LoginSignUpPage from "../support/pages/loginSignUp";

const loginSignUpPage = new LoginSignUpPage();
const signUpPage = new SignUpPage();

describe("Delete account", () => {
  beforeEach(function () {
    cy.page();
  });
  
  it("Delete account (succesfull)", async () => {
    // Arrange
    let email = `userExamples123+${Date.now()}@gmail.com`;
    const userId = LoginData.userId;
    const password = LoginData.userPassword;

    // Act
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
      signUpPage.phone
    );

    signUpPage.continueButton.click();
    signUpPage.topNavigationBar.deleteAccountLink.click();
    signUpPage.continueButton.click();

    signUpPage.topNavigationBar.signupLoginLink.click();
    loginSignUpPage.login(email, password);

    // Assert
    loginSignUpPage.errorMessage.should('have.text',
      loginSignUpPage.errorMessageText);
  });
});
