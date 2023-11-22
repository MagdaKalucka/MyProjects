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
  lastName = this.page.locator('#last_name');
  company = this.page.locator('#company');
  address1 = this.page.locator('#address1');
  country = this.page.locator('#country');
  state = this.page.locator('#state');
  city = this.page.locator('#city');
  zipcode = this.page.locator('#zipcode');
  mobileNumer = this.page.locator('#mobile_number');
  buttonCreateAccount = this.page.getByRole('button', {
    name: 'Create Account',
  });
  continue = this.page.getByRole('link', { name: 'Continue' });
  textAccountCreated = this.page.getByText('Account Created!');
  textCongratulation = this.page.getByText('Congratulations! Your new');
  textYouCanNow = this.page.getByText('You can now take advantage of');
  
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
    await this.lastName.fill(lastName);
    await this.company.fill(company);
    await this.address1.fill(adress);
    await this.country.selectOption(country);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipcode.fill(zipCode);
    await this.mobileNumer.fill(phone);
    await this.buttonCreateAccount.click();
  }

}
