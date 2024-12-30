using OpenQA.Selenium;

namespace SeleniumTests.PageObjectModels.Selectors
{
    internal class SignUpLoginSelectors
    {
        internal static By LoginEmailInput => By.Name("email");

        internal static By LoginPasswordInput => By.Name("password");

        internal static By LoginButton => By.CssSelector(".login-form .btn");

        internal static By ErrorText => By.XPath("//*[@id=\"form\"]/div/div/div[1]/div/form/p");

        internal static By NameInput => By.Name("name");

        internal static By SignupEmailInput => By.CssSelector("input[data-qa='signup-email']");

        internal static By SignupButton => By.CssSelector(".signup-form .btn");

        internal static By ErrorText2 => By.CssSelector("form[action='/signup'] p:nth-child(5)");
    }
}
