using Core.Configuration;

using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace UI.PageObject
{
    public abstract class BasePage
    {
        public readonly string MyUrl = ConfigurationReader.GetConfiguration()!.WebAppUrl!;

        public const string Password = "secret_sauce";

        private readonly IWebDriver _driver;

        internal BasePage(IWebDriver driver) => _driver = driver;

        protected void EnsurePageIsLoaded(string url)
        {
            if (_driver.Url != url)
            {
                throw new Exception($"Failed to load page. Page URL = '{_driver.Url}'");
            }
        }

        protected void WaitUntilElementDisplayed(By selector)
        {
            var wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(3))
            {
                PollingInterval = TimeSpan.FromMilliseconds(500),
            };

            wait.Until(d => d.FindElement(selector).Displayed);
        }
    }
}
