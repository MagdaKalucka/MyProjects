using OpenQA.Selenium;

namespace SeleniumTests.PageObjectModels.Selectors
{
    internal class SignUpSelectors
    {
        internal static By CreateAccountButton => By.CssSelector("button[data-qa='create-account']");

        internal static By PasswordInput => By.Id("password");

        internal static By CheckboxMr => By.Id("id_gender1");

        internal static By CheckboxMrs => By.Id("id_gender2");

        internal static By DropdownDay => By.Id("days");

        internal static By DropdownMonth => By.Id("months");

        internal static By DropdownYear => By.Id("years");

        internal static By FirstNameInput => By.Id("first_name");

        internal static By LastNameInput => By.Id("last_name");

        internal static By AddressInput => By.Id("address1");

        internal static By DropdownCountry => By.Id("country");

        internal static By StateInput => By.Id("state");

        internal static By CityInput => By.Id("city");

        internal static By ZipcodeInput => By.Id("zipcode");

        internal static By MobileNumberInput => By.CssSelector("input[data-qa='mobile_number']");

        internal static By ContinueButton => By.CssSelector("a[data-qa='continue-button']");
    }
}
