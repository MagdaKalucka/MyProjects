/// <reference types="cypress" />
import LoginData from "../support/loginData";
import SignUpPage from "../support/pages/signUp";
import LoginSignUpPage from "../support/pages/loginSignUp";

const signUpPage = new SignUpPage();
const loginSignUpPage = new LoginSignUpPage();
const userId = LoginData.userId;
const password = LoginData.userPassword;
let email;

describe("User sign up page", () => {
  beforeEach(function () {
    email = `userExamples123+${Date.now()}@gmail.com`;
    cy.page();
  });

  it("Sign up (successful)", () => {
    // Arrange

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

    // Assert
    signUpPage.accountCreatedTextLabel.should(
      "have.text",
      signUpPage.accountCreatedText
    );
    signUpPage.congratulationTextLabel.should(
      "have.text",
      signUpPage.congratulationText
    );
    signUpPage.youCanNowTextLabel.should("have.text", signUpPage.youCanNowText);

    // clean up after test
    signUpPage.continueButton.click();
    signUpPage.topNavigationBar.deleteAccountLink.click();
    signUpPage.continueButton.click();
    signUpPage.topNavigationBar.signupLoginLink.click();
    loginSignUpPage.login(email, password);
  });

  it("Sign up (unsuccessful) - Uncorrect email", () => {
    // Arrange

    //Act
    loginSignUpPage.singUp(userId, loginSignUpPage.uncorrectEmail);

    //Assert
    loginSignUpPage.emailAddressInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUpPage.typeMismatchMessage);
  });

  it("Sign up (unsuccessful) - Empty email", () => {
    // Arrange
    const emptyEmail = "{ESC}";

    //Act
    loginSignUpPage.singUp(userId, emptyEmail);

    //Assert
    loginSignUpPage.emailAddressInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUpPage.valueMissingMessage);
  });

  it.only("Sign up (unsuccessful) - Empty user", () => {
    // Arrange
    const emptyUserId = "{ESC}";

    //Act
    loginSignUpPage.singUp(emptyUserId, email);

    //Assert
    loginSignUpPage.signupButton.should('contain.text', 'Signup');
    loginSignUpPage.signupButton.should('be.enabled');
    loginSignUpPage.passwordInput.should('have.length', 1)
    loginSignUpPage.passwordInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUpPage.valueMissingMessage);
  });

  it("Sign up (unsuccessful) - User exists", () => {
    //Arrange

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

    signUpPage.topNavigationBar.logoutLink.click();
    loginSignUpPage.singUp(userId, email);

    //Assert
    loginSignUpPage.messageUserExist.should(
      "have.text",
      loginSignUpPage.messageUserExistText
    );
  });

  it("Sign up (unsuccessful) - Empty first name", () => {
    //Arrange
    const emptyFirstName = "{ESC}";

    // Act
    loginSignUpPage.singUp(userId, email);
    signUpPage.singUpSuccefull(
      password,
      signUpPage.day,
      signUpPage.month,
      signUpPage.years,
      emptyFirstName,
      signUpPage.lastName,
      signUpPage.company,
      signUpPage.adress,
      signUpPage.country,
      signUpPage.state,
      signUpPage.city,
      signUpPage.zipCode,
      signUpPage.phone
    );

    //Assert
    signUpPage.firstNameInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUpPage.valueMissingMessage);
  });
  /* I should write more tests about empty field but each tests will be this same it will only different name of field. */
});
