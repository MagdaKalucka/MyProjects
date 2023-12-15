import TopNavigationBar from "../components/topNavigationBar";
import LoginSignUpPage from "./loginSignUp";
import LoginData from "../loginData";

class SignUpPage {
  topNavigationBar = new TopNavigationBar;
  loginSignUpPage = new LoginSignUpPage;

  accountCreatedText: string = 'Account Created!';
  congratulationText: string = 'Congratulations! Your new account has been successfully created!';
  youCanNowText: string =
    'You can now take advantage of member privileges to enhance your online shopping experience with us.';

  get idGender1Input () {return cy.get('#id_gender1')};
  get idGender2Input () {return cy.get('#id_gender2')};
  get passwordSignUpInput () {return cy.get('#password')};
  get daySelect () {return cy.get('#days')};
  get monthSelect () {return cy.get('#months')};
  get yearSelect () {return cy.get('#years')};
  get firstNameInput () {return cy.get('#first_name')};
  get lastNameInput () {return cy.get('#last_name')};
  get companyInput () {return cy.get('#company')};
  get address1Input () {return cy.get('#address1')};
  get countryInput () {return cy.get('#country')};
  get stateInput () {return cy.get('#state')};
  get cityInput () {return cy.get('#city')};
  get zipCodeInput () {return cy.get('#zipcode')};
  get mobileNumerInput () {return cy.get('#mobile_number')};
  get createAccountButton () {return cy.dataCy('create-account')};
  get continueButton () {return cy.dataCy('continue-button')};
  get accountCreatedTextLabel () {return cy.contains('Account Created!')};
  get congratulationTextLabel () {return cy.contains('Congratulations! Your new')};
  get youCanNowTextLabel () {return cy.contains('You can now take advantage of')};
 
  day = '3';
  month = 'April';
  years = '1990';
  name = 'Mark';
  lastName = 'Jonnson';
  company = 'Star';
  adress = 'Morning 6';
  country = 'Canada';
  state = 'new';
  city = 'York';
  zipCode = '4444';
  phone = '123456789';

  singUpSuccefull(
    password: string,
    day: string,
    month: string,
    years: string,
    name: string,
    lastName: string,
    company: string,
    adress: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    phone: string,
  ) {
    this.idGender1Input.check();
    this.passwordSignUpInput.type(password);
    this.daySelect.select(day);
    this.monthSelect.select(month);
    this.yearSelect.select(years);
    this.firstNameInput.type(name);
    this.lastNameInput.type(lastName);
    this.companyInput.type(company);
    this.address1Input.type(adress);
    this.countryInput.select(country);
    this.stateInput.type(state);
    this.cityInput.type(city);
    this.zipCodeInput.type(zipCode);
    this.mobileNumerInput.type(phone);
    this.createAccountButton.click();
  }

  fullSignUp () {
  let email = `userExamples123+${Date.now()}@gmail.com`;
  this.loginSignUpPage.singUp(LoginData.userId, email);
  this.singUpSuccefull(
        LoginData.userPassword,
        this.day,
        this.month,
        this.years,
        this.name,
        this.lastName,
        this.company,
        this.adress,
        this.country,
        this.state,
        this.city,
        this.zipCode,
        this.phone,
      );
      this.continueButton.click();
    }

    deleteAccount () {
      this.topNavigationBar.deleteAccountLink.click();
      this.continueButton.click();
    }
}
export default SignUpPage;