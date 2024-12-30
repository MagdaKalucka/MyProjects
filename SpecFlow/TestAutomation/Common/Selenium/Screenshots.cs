using OpenQA.Selenium;

namespace Common.Selenium
{
    public class Screenshots
    {
        private readonly IWebDriver? _driver;

        public Screenshots(IWebDriver? driver)
        {
            _driver = driver;
        }

        public void TakeScreenshot(DirectoryInfo? directory, string fileName)
        {
            var screenshot = (((ITakesScreenshot)_driver!)!).GetScreenshot();

            screenshot.SaveAsFile($"{directory}//{fileName}");
        }
    }
}
