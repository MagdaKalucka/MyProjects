import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class SignUpPage {
  constructor(private page: Page) {}

  topNavigationBar = new TopNavigationBar(this.page);

  idGender1 = this.page.locator('#id_gender1');
  idGender2 = this.page.locator('#id_gender2');
  passwordSignUp = this.page.locator('#password');
  daySelect = this.page.locator('#days');
  monthSelect = this.page.locator('#months');
  yearSelect = this.page.locator('#years');
  firstName = this.page.locator('#first_name');
  lastNameL = this.page.locator('#last_name');
  companyL = this.page.locator('#company');
  address1 = this.page.locator('#address1');
  countryL = this.page.locator('#country');
  stateL = this.page.locator('#state');
  cityL = this.page.locator('#city');
  zipCodeL = this.page.locator('#zipcode');
  mobileNumer = this.page.locator('#mobile_number');
  buttonCreateAccount = this.page.getByRole('button', {
    name: 'Create Account',
  });
  continue = this.page.getByRole('link', { name: 'Continue' });
  textAccountCreated = this.page.getByText('Account Created!');
  textCongratulation = this.page.getByText('Congratulations! Your new');
  textYouCanNow = this.page.getByText('You can now take advantage of');
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
    await this.idGender1.check();
    await this.passwordSignUp.fill(password);
    await this.daySelect.selectOption(day);
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(years);
    await this.firstName.fill(name);
    await this.lastNameL.fill(lastName);
    await this.companyL.fill(company);
    await this.address1.fill(adress);
    await this.countryL.selectOption(country);
    await this.stateL.fill(state);
    await this.cityL.fill(city);
    await this.zipCodeL.fill(zipCode);
    await this.mobileNumer.fill(phone);
    await this.buttonCreateAccount.click();
  }
}
