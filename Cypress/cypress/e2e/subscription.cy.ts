/// <reference types="cypress" />
import BottomNavigation from "../support/components/bottomNavigation";
import LoginSignUpPage from "../support/pages/loginSignUp";

const bottomNavigation = new BottomNavigation();
const loginSignUp = new LoginSignUpPage();

describe("Subscription", () => {
  beforeEach(function () {
    cy.page();
  });

  it("Send subscription (successful)", () => {
    //Arrange
    let email = `userExamples123+${Date.now()}@gmail.com`;

    //Act
    bottomNavigation.subscriptionInput.type(email);
    bottomNavigation.sendButton.click();

    //Asert
    bottomNavigation.messageSentLabel.then((text) => {
      expect(text).to.have.text(bottomNavigation.messageSentText);
    });
  });

  it("Send subscription (unsuccessful) - Not full email", () => {
    //Arrange

    //Act
    bottomNavigation.subscriptionInput.type(loginSignUp.uncorrectEmail);
    bottomNavigation.sendButton.click();

    //Assert
    bottomNavigation.subscriptionInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUp.typeMismatchMessage)
  });

  it("Send subscription (unsuccessful) - Empty input", () => {
    //Arrange

    //Act
    bottomNavigation.sendButton.click();

    //Assert
    bottomNavigation.subscriptionInput.invoke('prop', 'validationMessage')
    .should('equal', loginSignUp.valueMissingMessage)
  });
});
