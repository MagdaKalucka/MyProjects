using System.Diagnostics;

using Core.WebDriver;

using Xunit;

using OpenQA.Selenium;

namespace Tests.Tests
{
    public class BaseTest : IDisposable
    {

        public IWebDriver Driver;

        protected readonly Core.Logger.Serilog Serilog = new();

        public BaseTest()
        {
            Driver = new WebDriverProvider().Driver;
            Serilog.LogConfiguration();
        }

        public void Dispose()
        {
            Driver.Quit();
            Serilog.WriteToLog($"End test ");
            Serilog.Flush();
        }

        protected string GetCurrentTestMethodName()
        {
            string? methodName = null;
            string? methodDeclaringTypeName = null;

            var stack = new StackTrace();
            foreach (var frame in stack.GetFrames())
            {
                var method = frame.GetMethod();
                var attrs = method?.GetCustomAttributes(typeof(TheoryAttribute), false);
                if (attrs != null && attrs.Length > 0)
                {

                    methodName = method!.Name;
                    methodDeclaringTypeName = method.DeclaringType?.Name;
                }
            }

            return $"{methodDeclaringTypeName}.{methodName}";
        }
    }
}
