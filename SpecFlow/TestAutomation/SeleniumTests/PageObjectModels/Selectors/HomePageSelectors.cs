using OpenQA.Selenium;

namespace SeleniumTests.PageObjectModels.Selectors
{
    internal class HomePageSelectors
    {
        internal static By PopupConsentButton => By.XPath("//p [text()='Consent']");

        internal static By PageTitle => By.CssSelector("head > title");
    }
}
