using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;

using SeleniumTests.PageObjectModels.Selectors;

namespace SeleniumTests.PageObjectModels
{
    internal class Subscription : BasePage
    {
        private readonly string messageSuccessSubscribe = "You have been successfully subscribed!";

        private readonly IWebDriver _driver;

        internal Subscription(IWebDriver driver)
            : base(driver) => _driver = driver;

        internal void ScroolOnTheBottomPage()
        {
            //IJavaScriptExecutor js = (IJavaScriptExecutor)_driver;
            //var element = _driver!.FindElement(CommonSelectors.SubscriptionInput);
            //js.ExecuteScript("arguments[0].scrollIntoView();", element);
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

        internal void CheckingSuccessSubscribe()
        {
            Assert.Equivalent(GetTextSuccessSubscribe(), messageSuccessSubscribe);
        }

        internal void CheckMessageIncorrectEmail(string message)
        {
            Assert.Equivalent(GetValidationMessage(CommonSelectors.SubscriptionInput), message);
        }
    }
}
