import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class LoginSignUpPage {
  constructor(private page: Page) {}
  topNavigationBar = new TopNavigationBar(this.page);

  inputName = this.page.getByPlaceholder('Name');
  inputEmail = this.page.locator(".signup-form input[name='email']");
  buttonSignup = this.page.getByRole('button', { name: 'Signup' });

  inputLogin = this.page
    .locator('form')
    .filter({ hasText: 'Login' })
    .getByPlaceholder('Email Address');
  inputPassword = this.page.getByPlaceholder('Password');
  buttonLogin = this.page.getByRole('button', { name: 'Login' });
  errorMessage = this.page.getByText('Your email or password is');
  message: string = 'Your email or password is incorrect!';
  errorMessageExist = this.page.getByText('Email Address already exist!');
  valueMissingMessage: string = 'Wypełnij to pole.';
  valueMissingMessageEng: string = 'Please fill out this field.';

  uncorrectEmail: string = 'userexample123';
  typeMismatchMessage: string = `Uwzględnij znak „@” w adresie e-mail. W adresie „${this.uncorrectEmail}” brakuje znaku „@”.`;
  typeMismatchMessageEng: string = `Please include an '@' in the email address. '${this.uncorrectEmail}' is missing an '@'.`;

  async singUp(userId: string, email: string): Promise<void> {
    await this.topNavigationBar.buttonSignupLogin.click();
    await this.inputName.fill(userId);
    await this.inputEmail.fill(email);
    await this.buttonSignup.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.inputLogin.fill(email);
    await this.inputPassword.fill(password);
    await this.buttonLogin.click();
  }
}
