using Common.Configuration;
using Common.Specflow;

namespace ApiTests.Hook
{
    [Binding]
    public sealed class Hook
    {
        [BeforeScenario]
        public void BeforeScenarioWithTag()
        {
        }

        [BeforeTestRun]
        internal static void BeforeTestRun()
        {
            TestArtifactsDirectoryCreator.CreateTestReportDirectory();
        }

        [AfterTestRun]
        internal static void AfterTestRun()
        {
            var testAssembly = LivingDocGenerator.GetCallingAssemblyName();
            var reportName = $"Tests_Report.html";

            LivingDocGenerator.GenerateLivingDoc(testAssembly, reportName);
        }
    }
}