using Common.Selenium;

using SeleniumTests.PageObjectModels;
using SeleniumTests.PageObjectModels.Selectors;

namespace SeleniumTests.StepDefinitions
{
    [Binding]
    internal class ContactUsSteps
    {
        private readonly ContactUsPage _contactUs;

        internal ContactUsSteps(WebDriverProvider webDriverProvider)
        {
            _contactUs = new ContactUsPage(webDriverProvider.Driver);
        }

        [When(@"User cliks Contact us link")]
        internal void UserCliksContactUsLink()
        {
            _contactUs.ClickLinkContactUs();
        }

        [Then(@"User is redirected to the Contact us page")]
        internal void UserIsRedirectedToTheContactUsPage()
        {
            _contactUs.IsLoaded();
        }

        [When(@"User fills name, email, subject and message")]
        internal void UserFillsNameEmailSubmitMessage()
        {
            _contactUs.TypeContactUsName();
            _contactUs.TypeContactUsEmail();
            _contactUs.TypeContactUsSubcject();
            _contactUs.TypeContactUsMessage();
        }

        [When(@"User clicks submit button")]
        internal void UserClicksSubmitButton()
        {
            _contactUs.ScroolToTheButtonSubmit();
            _contactUs.ClickSubmitButton();
        }

        [When("User clicks Ok in alert")]
        internal void UserClicksOkInAlert()
        {
            _contactUs.ClickAlert();
        }

        [When(@"User fills name, subject and message")]
        internal void UserFillsNameSubmitMessage()
        {
            _contactUs.TypeContactUsName();
            _contactUs.TypeContactUsSubcject();
            _contactUs.TypeContactUsMessage();
        }

        [When(@"Users fills only email")]
        internal void UserFillsOnlyEmail()
        {
            _contactUs.TypeContactUsEmail();
        }

        [Then(@"User sends correct message")]
        internal void UserSendsCorrectMessage()
        {
            Assert.Equivalent(_contactUs.GetTextSuccessSendForm(), "Success! Your details have been submitted successfully.");
        }

        [Then(@"User can't send form - fill out this field")]
        internal void UserCantSendFormFillOutThisField()
        {
            Assert.Equivalent(_contactUs.GetValidationMessage(ContactUsSelectors.ContactEmailInput), BasePage.MessageEmptyField);
        }

        [When(@"User can come back to home page")]
        internal void UserCanComeBackToHomePage()
        {
            _contactUs.ClickHomeButton();
        }

        [When(@"User fills incorrect email in contact us form")]
        internal void UsersFillsUncorrectEmailInContactUsForm()
        {
            _contactUs.TypeContactUsIncorrectEmail();
        }

        [Then(@"User can't sent form - incorrect email messaage")]
        internal void UserCantSentFormUncorectEMailMessaage()
        {
            Assert.Equivalent(_contactUs.GetValidationMessage(ContactUsSelectors.ContactEmailInput), BasePage.MessageIncorrectEmail);
        }
    }
}
