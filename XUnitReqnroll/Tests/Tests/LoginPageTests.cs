using FluentAssertions;

using Xunit;

using UI.PageObject;

namespace Tests.Tests
{
    public class LoginPageTests : BaseTest
    {
        private readonly LoginPage _loginPage;
       
        private InventoryPage? _inventoryPage;

        public LoginPageTests()
        {
            _loginPage = new LoginPage(Driver);
        }

        [Theory]
        [InlineData("test_user", "Epic sadface: Username is required")]
        public void UC1LoginFormWithEmptyCredentials(string userName, string message)
        {
            //Arrange
            Serilog.WriteToLog($"start test: {GetCurrentTestMethodName()}");
            _loginPage.NavigateTo();
            Serilog.WriteToLog("open saucedemo page");

            //Act
            _loginPage.EnterUsername(userName);
            Serilog.WriteToLog($"Enter username: {userName}");
            _loginPage.EnterPassword();
            Serilog.WriteToLog("Enter password");
            _loginPage.ClearUsernameInput();
            Serilog.WriteToLog("Clear the 'Username' input");
            _loginPage.ClearPasswordInput();
            Serilog.WriteToLog("Clear the 'Password' input");
            _loginPage.ClickLoginButton();
            Serilog.WriteToLog("Click the 'Login' button");

            //Assert
            _loginPage.GetErrorMessageText().Should().Be(message);
            Serilog.WriteToLog($"Get error message: {message}");
        }

        [Theory]
        [InlineData("test_user", "Epic sadface: Password is required")]
        public void UC2LoginFormWithCredentialsByPassingUsername(string userName, string message)
        {
            //Arrange
            Serilog.WriteToLog($"start test: {GetCurrentTestMethodName()}");
            _loginPage.NavigateTo();
            Serilog.WriteToLog("open saucedemo page");

            //Act
            _loginPage.EnterUsername(userName);
            Serilog.WriteToLog($"Enter username: {userName}");
            _loginPage.EnterPassword();
            Serilog.WriteToLog("Enter password");
            _loginPage.ClearPasswordInput();
            Serilog.WriteToLog("Clear the 'Password' input");
            _inventoryPage = _loginPage.ClickLoginButton();
            Serilog.WriteToLog("Click the 'Login' button");

            //Assert
            _loginPage.GetErrorMessageText().Should().Be(message);
            Serilog.WriteToLog($"Get error message: {message}");
        }

        [Theory]
        [InlineData("standard_user", "Swag Labs")]
        [InlineData("problem_user", "Swag Labs")]
        [InlineData("performance_glitch_user", "Swag Labs")]
        [InlineData("error_user", "Swag Labs")]
        [InlineData("visual_user", "Swag Labs")]

        public void UC3LoginFormWithCredentialsByPassingUsernamePassword(string userName, string titlePage)
        {
            //Arrange
            Serilog.WriteToLog($"start test: {GetCurrentTestMethodName()}");
            _loginPage.NavigateTo();
            Serilog.WriteToLog("open saucedemo page");


            //Act
            _loginPage.EnterUsername(userName);
            Serilog.WriteToLog($"Enter username: {userName}");
            _loginPage.EnterPassword();
            Serilog.WriteToLog($"Enter password: {BasePage.Password}");
            _inventoryPage = _loginPage.ClickLoginButton();
            Serilog.WriteToLog("Click the 'Login' button");

            //Assert
            _inventoryPage.IsLoaded();
            Serilog.WriteToLog("Redirected to the Inventory page");
            _inventoryPage.GetPageTitleText().Should().Be(titlePage);
            Serilog.WriteToLog($"See title {titlePage} on the dashboard");
        }
    }
}
