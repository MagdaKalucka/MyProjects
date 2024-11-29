class TopNavigationBar { 
    
  get signupLoginLink () {return cy.contains('Signup / Login')};
  get deleteAccountLink () {return cy.contains('Delete Account')};
  get logoutLink () {return cy.contains('Logout')};
  get loggedInUsLink () {return cy.contains('Logged in as')};
  get contactUsLink () {return cy.contains('Contact us')};
  get cartLink () {return cy.contains('Cart')};
  get productLink () {return cy.contains('Products')};
}

export default TopNavigationBar;