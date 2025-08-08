using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;

namespace Core.WebDriver
{
    internal class BrowserOptions
    {
        internal static void GetChromeOptions(ChromeOptions options)
        {
            options.AddArgument("--lang=en");
            options.AddArgument("--start-maximized");
            options.AddArgument("--headless=new");
            options.AddArgument("--no-sandbox");
            options.AddArgument("--disable-dev-shm-usage");
            options.AddArgument("--incognito");
            options.SetLoggingPreference(LogType.Browser, LogLevel.All);
        }

        internal static void GetFirefoxOptions(FirefoxOptions options)
        {
            var profile = new FirefoxProfile();
            profile.SetPreference("intl.accept_languages", "en-US, en");
            profile.SetPreference("intl.locale.requested", "en-US, en");

            options.Profile = profile;
        }
    }
}
