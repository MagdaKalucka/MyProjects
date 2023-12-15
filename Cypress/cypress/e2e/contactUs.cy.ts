/// <reference types="cypress" />
import LoginData from "../support/loginData";
import ContactUs from "../support/pages/contactUs";
import LoginSignUpPage from "../support/pages/loginSignUp";

const contactUs = new ContactUs();
const loginSignUp = new LoginSignUpPage();
const userId = LoginData.userId;
let email = `userExamples123+${Date.now()}@gmail.com`;

describe("Contact us page", () => {
  beforeEach(function () {
    cy.page();
    contactUs.topNavigationBar.contactUsLink.click();
  });

  it("Send message (successful) - Full form", () => {
    //Arrange

    //Act
    contactUs.contactNameInput.type(userId);
    contactUs.contactEmailInput.type(email);
    contactUs.contactSubjectInput.type(contactUs.contactSubject);
    contactUs.contactMessageInput.type(contactUs.contactMessage);
    contactUs.submitButton.click();
    contactUs.alertButton;

    //Assert
    contactUs.messageLabel.should("have.text", contactUs.messageText);
  });

  it("Send message (unsuccessful) - Empty form", () => {
    //Arrange

    //Act
    contactUs.submitButton.click();

    //Assert
    contactUs.contactEmailInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUp.valueMissingMessage);
  });

  it("Send message (unsuccessful) - Form without email", () => {
    //Arrange

    //Act
    contactUs.contactNameInput.type(userId);
    contactUs.contactSubjectInput.type(contactUs.contactSubject);
    contactUs.contactMessageInput.type(contactUs.contactMessage);
    contactUs.submitButton.click();

    //Assert
    contactUs.contactEmailInput
      .invoke("prop", "validationMessage")
      .should("equal", loginSignUp.valueMissingMessage);
  });

  it("Send message (successful) - Form only with email", () => {
    //Arrange

    //Act
    contactUs.contactEmailInput.type(email);
    contactUs.submitButton.click();
    contactUs.alertButton;

    //Assert
    contactUs.messageLabel.should("have.text", contactUs.messageText);
  });
});
