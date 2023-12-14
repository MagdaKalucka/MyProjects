class BottomNavigation {
  
  get subscriptionInput() {
    return cy.get("#susbscribe_email");
  }

  get sendButton() {
    return cy.get("#subscribe");
  }

  get messageSentLabel() {
    return cy.get("#success-subscribe .alert-success");
  }

  messageSentText: string = "You have been successfully subscribed!";
}

export default BottomNavigation;
