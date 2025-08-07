using OpenQA.Selenium;

namespace UI.PageObject
{
    public class LoginPage : BasePage
    {
        private readonly By _usernameInput = By.Id("user-name");

        private readonly By _passwordInput = By.Id("password");

        private readonly By _errorMessage = By.ClassName("error-message-container");

        private readonly By _loginButton = By.Id("login-button");

        private readonly IWebDriver _driver;

        public LoginPage(IWebDriver driver)
            : base(driver) => _driver = driver;

        public void NavigateTo()
        {
            _driver.Navigate().GoToUrl(MyUrl);
        }

        public void EnterUsername(string username)
        {
            WaitUntilElementDisplayed(_usernameInput);
            _driver.FindElement(_usernameInput).SendKeys(username);
        }

        public void EnterPassword()
        {
            _driver.FindElement(_passwordInput).SendKeys(Password);
        }

        public void ClearUsernameInput()
        {
            _driver.FindElement(_usernameInput).SendKeys(Keys.Control + "a");
            _driver.FindElement(_usernameInput).SendKeys(Keys.Delete);
        }
        public void ClearPasswordInput()
        {
            _driver.FindElement(_passwordInput).SendKeys(Keys.Control + "a");
            _driver.FindElement(_passwordInput).SendKeys(Keys.Delete);
        }
        public InventoryPage ClickLoginButton()
        {
            _driver.FindElement(_loginButton).Click();

            return new InventoryPage(_driver);
        }

        public string GetErrorMessageText()
        {
            return _driver.FindElement(_errorMessage).Text;
        }
    }
}
