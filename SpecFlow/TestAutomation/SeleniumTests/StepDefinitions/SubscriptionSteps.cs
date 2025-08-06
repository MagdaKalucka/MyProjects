using Common.Selenium;

using SeleniumTests.PageObjectModels;
using SeleniumTests.PageObjectModels.Selectors;

namespace SeleniumTests.StepDefinitions
{
    [Binding]
    internal class SubscriptionSteps
    {
        private readonly Subscription _subscription;

        internal SubscriptionSteps(WebDriverProvider webDriverProvider)
        {
            _subscription = new Subscription(webDriverProvider.Driver);
        }

        [Given(@"User goes to the page bottom")]
        internal void UserGoesToThePageBottom()
        {
            _subscription.ScroolOnTheBottomPage();
        }

        [When(@"User fills email")]
        internal void UserFillsEmail()
        {
            _subscription.TypeEmailSubscription();
        }

        [When(@"User clicks send button")]
        internal void UserClicksSendButton()
        {
            _subscription.ClickSendButton();
        }

        [When(@"User fills email: (.*)")]
        internal void UserFillsUncorrectEmail(string email)
        {
            _subscription.TypeIncorrectEmailSubscription(email);
        }

        [Then(@"User receives information about successful subscription")]
        internal void UserGetsInformationAboutSuccessfulSubscription()
        {
            Assert.Equivalent(_subscription.GetTextSuccessSubscribe(), "You have been successfully subscribed!");
        }

        [Then(@"User gets message: (.*)")]
        internal void UserGetsMessage(string message)
        {
            Assert.Equivalent(_subscription.GetValidationMessage(CommonSelectors.SubscriptionInput), message);
        }
    }
}
