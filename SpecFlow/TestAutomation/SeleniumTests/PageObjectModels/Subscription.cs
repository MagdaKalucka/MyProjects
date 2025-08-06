using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;

using SeleniumTests.PageObjectModels.Selectors;

namespace SeleniumTests.PageObjectModels
{
    internal class Subscription : BasePage
    {
        private readonly IWebDriver _driver;

        internal Subscription(IWebDriver driver)
            : base(driver) => _driver = driver;

        internal void ScroolOnTheBottomPage()
        {
            Actions actions = new Actions(_driver);

            var element1 = _driver!.FindElement(CommonSelectors.EndPage);

            actions.ScrollToElement(element1);

            actions.Perform();
        }

        internal void TypeEmailSubscription()
        {
            _driver.FindElement(CommonSelectors.SubscriptionInput).SendKeys(UserEmail);
        }

        internal void ClickSendButton()
        {
            _driver.FindElement(CommonSelectors.SubscriptionSendButton).Click();
        }

        internal void TypeIncorrectEmailSubscription(string email)
        {
            _driver.FindElement(CommonSelectors.SubscriptionInput).SendKeys(email);
        }

        internal string GetTextSuccessSubscribe()
        {
            return _driver.FindElement(CommonSelectors.SuccessSubscribeLabel).Text;
        }
    }
}
