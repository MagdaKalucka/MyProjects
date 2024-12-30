using OpenQA.Selenium;

using SeleniumTests.PageObjectModels.Selectors;

namespace SeleniumTests.PageObjectModels
{
    internal class SignUpLogin : BasePage
    {
        private const string Url = "https://www.automationexercise.com/login";

        private const string PageTitle = "Automation Exercise - Signup / Login";

        private const string LoggedInUs = $"Logged in as {UserId}";

        private const string IncorrectText = "Your email or password is incorrect!";

        private const string EmailAlreadyExistText = "Email Address already exist!";

        private readonly IWebDriver _driver;

        internal SignUpLogin(IWebDriver driver)
            : base(driver) => _driver = driver;

        internal void TypeLoginEmail()
        {
            _driver.FindElement(SignUpLoginSelectors.LoginEmailInput).SendKeys(UserEmail);
        }

        internal void TypeLoginPassword()
        {
            _driver.FindElement(SignUpLoginSelectors.LoginPasswordInput).SendKeys(UserPassword);
        }

        internal void ClickLoginButton()
        {
            _driver.FindElement(SignUpLoginSelectors.LoginButton).Click();
        }

        internal void IsLoaded()
        {
            EnsurePageIsLoaded(PageTitle, Url);
        }

        internal string GetUserIsLogginedInUsText()
        {
            return _driver.FindElement(CommonSelectors.LoggedInAsLink).Text;
        }

        internal void UserIsLoggedInAs()
        {
            GetUserIsLogginedInUsText().Should().Be(LoggedInUs);
        }

        internal void TypeIncorrectEmail()
        {
            _driver.FindElement(SignUpLoginSelectors.LoginEmailInput).SendKeys(IncorrectEmail);
        }

        internal void TypeIncorrectPassword()
        {
            _driver.FindElement(SignUpLoginSelectors.LoginPasswordInput).SendKeys(IncorrectPassword);
        }

        internal void CheckValidationMessageInPasswordField()
        {
            Assert.Equivalent(GetValidationMessage(SignUpLoginSelectors.LoginPasswordInput), MessageEmptyField);
        }

        internal void CheckValidationMessageInIncorrectEmail()
        {
            Assert.Equivalent(GetValidationMessage(SignUpLoginSelectors.LoginEmailInput), MessageIncorrectEmail);
        }

        internal string GetIncorrectText()
        {
            return _driver.FindElement(SignUpLoginSelectors.ErrorText).Text;
        }

        internal void CheckIncorrectText()
        {
            GetIncorrectText().Should().Be(IncorrectText);
        }

        internal void TypeUserName()
        {
            _driver.FindElement(SignUpLoginSelectors.NameInput).SendKeys(UserName);
        }

        internal void TypeNewEmail(string email)
        {
            _driver.FindElement(SignUpLoginSelectors.SignupEmailInput).SendKeys(email);
        }

        internal void ClickSignupButton()
        {
            _driver.FindElement(SignUpLoginSelectors.SignupButton).Click();
        }

        internal void TypeIncorrectNewEmail(string email)
        {
            _driver.FindElement(SignUpLoginSelectors.SignupEmailInput).SendKeys(email);
        }

        internal void GetErrorMessage(string message)
        {
            Assert.Equivalent(GetValidationMessage(SignUpLoginSelectors.SignupEmailInput), message);
        }

        internal void TypeUserExistEmail()
        {
            _driver.FindElement(SignUpLoginSelectors.SignupEmailInput).SendKeys(UserEmail);
        }

        internal string GetTextEmailAlreadyExist()
        {
            return _driver.FindElement(SignUpLoginSelectors.ErrorText2).Text;
        }

        internal void CheckTextEmailAlreadyExist()
        {
            GetTextEmailAlreadyExist().Should().Be(EmailAlreadyExistText);
        }

        internal void GetMessageEmptyName()
        {
            Assert.Equivalent(GetValidationMessage(SignUpLoginSelectors.NameInput), MessageEmptyField);
        }
    }
}
