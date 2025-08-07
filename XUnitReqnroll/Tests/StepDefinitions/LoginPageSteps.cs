using Core.WebDriver;

using FluentAssertions;

using UI.PageObject;

namespace Tests.StepDefinitions
{
    [Binding]
    internal class LoginPageSteps
    {
        private readonly LoginPage _loginPage;

        private InventoryPage? _inventoryPage;
        
        internal LoginPageSteps(WebDriverProvider webDriverProvider)
        {
            _loginPage = new LoginPage(webDriverProvider.Driver);
        }

        [Given(@"User opens saucedemo page")]
        internal void GivenUserOpensSaucedemoPage()
        {
            _loginPage.NavigateTo();
        }

        [When(@"User enters username: (.*)")]
        internal void WhenUserEntersUsername(string username)
        {
            _loginPage.EnterUsername(username);
        }

        [When(@"User enters password")]
        internal void WhenUserEntersPassword()
        {
            _loginPage.EnterPassword();
        }

        [When(@"User clears the 'Username' input")]
        internal void WhenUserClearsTheUsernameInput()
        {
            _loginPage.ClearUsernameInput();
        }

        [When(@"User clears the 'Password' input")]
        internal void WhenUserClearsThePasswordInput()
        {
            _loginPage.ClearPasswordInput();
        }

        [When(@"User clicks the 'Login' button")]
        internal void WhenUserClicksTheLoginButton()
        {
            _inventoryPage = _loginPage.ClickLoginButton();
        }

        [Then(@"User gets error message: (.*)")]
        internal void ThenUserGetsErrorMessage(string message)
        {
            _loginPage.GetErrorMessageText().Should().Be(message); ;
        }

        [Then(@"User is redirected to the Inventory page")]
        internal void ThenUserIsRedirectedToTheInventoryPage()
        {
            _inventoryPage!.IsLoaded();
        }

        [Then(@"User sees title (.*) on the dashboard")]
        internal void ThenUserSeesTitleInTheDashboard(string title)
        {
            _inventoryPage!.GetPageTitleText().Should().Be(title);
        }
    }
}
