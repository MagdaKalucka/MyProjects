import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class SignUpPage {
  constructor(private page: Page) {}

  topNavigationBar = new TopNavigationBar(this.page);

  idGender1Input = this.page.locator('#id_gender1');
  idGender2Input = this.page.locator('#id_gender2');
  passwordSignUpInput = this.page.locator('#password');
  daySelect = this.page.locator('#days');
  monthSelect = this.page.locator('#months');
  yearSelect = this.page.locator('#years');
  firstNameInput = this.page.locator('#first_name');
  lastNameInput = this.page.locator('#last_name');
  companyInput = this.page.locator('#company');
  address1Input = this.page.locator('#address1');
  countryInput = this.page.locator('#country');
  stateInput = this.page.locator('#state');
  cityInput = this.page.locator('#city');
  zipCodeInput = this.page.locator('#zipcode');
  mobileNumerInput = this.page.locator('#mobile_number');
  createAccountButton = this.page.getByRole('button', { name: 'Create Account',});
  continueButton = this.page.getByRole('link', { name: 'Continue' });
  accountCreatedTextLabel = this.page.getByText('Account Created!');
  accountCreatedText: string = 'Account Created!';
  congratulationTextLabel = this.page.getByText('Congratulations! Your new');
  congratulationText: string = 'Congratulations! Your new account has been successfully created!';
  youCanNowTextLabel = this.page.getByText('You can now take advantage of');
  youCanNowText: string =
    'You can now take advantage of member privileges to enhance your online shopping experience with us.';
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

  async singUpSuccefull(
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
  ): Promise<void> {
    await this.idGender1Input.check();
    await this.passwordSignUpInput.fill(password);
    await this.daySelect.selectOption(day);
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(years);
    await this.firstNameInput.fill(name);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.address1Input.fill(adress);
    await this.countryInput.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipCodeInput.fill(zipCode);
    await this.mobileNumerInput.fill(phone);
    await this.createAccountButton.click();
  }
}
