using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;

using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;
using WebDriverManager.Helpers;

namespace Core.WebDriver
{
    internal class WebDriverFactory
    {
        internal const string Chrome = "Chrome";

        internal const string Firefox = "Firefox";

        private IWebDriver? _driver;

        internal IWebDriver? GetWebDriver(string browser)
        {
            switch (browser)
            {
                case Chrome:
                    var chromeOptions = new ChromeOptions();
                    BrowserOptions.GetChromeOptions(chromeOptions);
                    _driver = new ChromeDriver(new DriverManager().SetUpDriver(new ChromeConfig(), VersionResolveStrategy.MatchingBrowser), chromeOptions);
                    break;
                case Firefox:
                    var firefoxOptions = new FirefoxOptions();
                    BrowserOptions.GetFirefoxOptions(firefoxOptions);
                    _driver = new FirefoxDriver(new DriverManager().SetUpDriver(new FirefoxConfig(), VersionResolveStrategy.Latest), firefoxOptions);
                    break;
            }

            return _driver;
        }
    }
}
