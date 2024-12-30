using System.Reflection;

using Common.Cmd;
using Common.Configuration;

namespace Common.Specflow
{
    public class LivingDocGenerator
    {
        private const string TestExecutionFile = "TestsExecution.json";

        public static void GenerateLivingDoc(string testAssembly, string reportName)
        {
            try
            {
                var command = PrepareCommand(testAssembly, reportName);
                CmdHelper.StartProcess(command);
                CmdHelper.StopProcess();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Generate LivingDoc failed: {ex.Message}");
            }
        }

        public static string GetCallingAssemblyName()
        {
            return Path.Combine(AppDomain.CurrentDomain.BaseDirectory, $"{Assembly.GetCallingAssembly().GetName().Name}.dll");
        }

        private static string PrepareCommand(string testAssembly, string reportName)
        {
            var assembly = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, testAssembly);
            var testExecution = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory, TestExecutionFile, SearchOption.AllDirectories)[0];
            var testReport = Path.Combine(TestArtifactsDirectoryCreator.Path, reportName);

            return $@"/c livingdoc test-assembly {assembly} -t {testExecution} --output {testReport}";
        }
    }
}
