using OpenQA.Selenium;

namespace UI.PageObject
{
    public class InventoryPage : BasePage
    {
        private readonly IWebDriver _driver;

        private readonly By _titlePage = By.ClassName("app_logo");

        private const string Url = "https://www.saucedemo.com/inventory.html";

        public InventoryPage(IWebDriver driver)
            : base(driver) => _driver = driver;

        public void IsLoaded()
        {
            EnsurePageIsLoaded(Url);
        }

        public string GetPageTitleText()
        {
            return _driver.FindElement(_titlePage).Text;
        }
    }
}
