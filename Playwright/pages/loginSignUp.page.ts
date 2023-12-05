import { Page } from '@playwright/test';
import { TopNavigationBar } from '../components/topNavigationBar.components';

export class LoginSignUpPage {
  constructor(private page: Page) {}
  topNavigationBar = new TopNavigationBar(this.page);

  nameInput = this.page.getByPlaceholder('Name');
  emailAddressInput = this.page.locator(".signup-form input[name='email']");
  signupButton = this.page.getByRole('button', { name: 'Signup' });

  emailLoginInput = this.page.getByTestId('login-email');
  passwordInput = this.page.getByPlaceholder('Password');
  loginButton = this.page.getByRole('button', { name: 'Login' });
  errorMessage = this.page.getByText('Your email or password is');
  message: string = 'Your email or password is incorrect!';
  errorMessageExist = this.page.getByText('Email Address already exist!');
  //valueMissingMessage: string = 'Wypełnij to pole.';
  //valueMissingMessageEng: string = 'Please fill out this field.';
  // typeMismatchMessage: string = `Uwzględnij znak „@” w adresie e-mail. W adresie „${this.uncorrectEmail}” brakuje znaku „@”.`;
  // typeMismatchMessageEng: string = `Please include an '@' in the email address. '${this.uncorrectEmail}' is missing an '@'.`;
  
  missingMessageBrowser: string = process.env.BROWSER === 'default' ? 'Wypełnij to pole.' : 'Please fill out this field.';
  valueMissingMessage: string = this.missingMessageBrowser;

  uncorrectEmail: string = 'userexample123';
  mismatchMessageBrowser: string = process.env.BROWSER === 'default' ? `Uwzględnij znak „@” w adresie e-mail. W adresie „${this.uncorrectEmail}” brakuje znaku „@”.` : `Please include an '@' in the email address. '${this.uncorrectEmail}' is missing an '@'.` ;
  typeMismatchMessage: string = this.mismatchMessageBrowser

  async singUp(userId: string, email: string): Promise<void> {
    await this.topNavigationBar.buttonSignupLogin.click();
    await this.nameInput.fill(userId);
    await this.emailAddressInput.fill(email);
    await this.signupButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailLoginInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
