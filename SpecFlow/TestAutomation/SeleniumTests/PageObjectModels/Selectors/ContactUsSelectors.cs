using OpenQA.Selenium;

namespace SeleniumTests.PageObjectModels.Selectors
{
    internal class ContactUsSelectors
    {
        internal static By ContactNameInput => By.Name("name");

        internal static By ContactEmailInput => By.Name("email");

        internal static By ContactSubjectInput => By.Name("subject");

        internal static By ContactYourMessageHereInput => By.Id("message");

        internal static By ContactUploadFiles => By.Name("upload_file");

        internal static By ContactButtonSubmit => By.ClassName("btn-primary");

        internal static By ContactUsCorrectSendForm => By.ClassName("alert-success");

        internal static By ContactUsHomeButton => By.ClassName("btn-success");
    }
}
