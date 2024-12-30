using OpenQA.Selenium;

namespace SeleniumTests.PageObjectModels.Selectors
{
    internal class CommonSelectors
    {
        internal static By HomeButton => By.LinkText("Home");

        internal static By SignUpLoginLink => By.LinkText("Signup / Login");

        internal static By LogoutLink => By.LinkText("Logout");

        internal static By SubscriptionInput => By.Id("susbscribe_email");

        internal static By SubscriptionSendButton => By.ClassName("fa-arrow-circle-o-right");

        internal static By SuccessSubscribeLabel => By.Id("success-subscribe");

        internal static By LoggedInAsLink => By.XPath("//li[10]//a");

        internal static By ContactUsLink => By.LinkText("Contact us");

        internal static By EndPage => By.ClassName("pull-left");

        internal static By DeleteAccountLink => By.LinkText("Delete Account"); //.fa-trash-o
    }
}
