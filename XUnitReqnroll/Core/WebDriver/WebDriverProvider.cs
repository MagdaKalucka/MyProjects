using OpenQA.Selenium;

namespace Core.WebDriver
{
    public class WebDriverProvider : IDisposable
    {
        private static readonly string Browser = Configuration.ConfigurationReader.GetConfiguration()!.Selenium!.Browser!;

        private readonly Lazy<IWebDriver> _driverLazy;

        private bool _isDisposed;

        public WebDriverProvider()
        {
            _driverLazy = new Lazy<IWebDriver>(CreateDriver!);
        }

        public IWebDriver Driver => _driverLazy.Value;

        public void Dispose()
        {
            if (_isDisposed)
            {
                return;
            }

            if (_driverLazy.IsValueCreated)
            {
                Driver.Quit();
            }

            _isDisposed = true;
        }

        private IWebDriver? CreateDriver()
        {
            return new WebDriverFactory().GetWebDriver(Browser);
        }
    }
}
