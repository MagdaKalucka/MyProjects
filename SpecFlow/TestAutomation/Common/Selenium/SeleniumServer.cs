using System.Diagnostics;
using System.Runtime.InteropServices;

namespace Common.Selenium
{
    public class SeleniumServer
    {
        private const string ServerJarName = "selenium-server-4.27.0.jar";

        private static readonly string BaseDirectory = AppDomain.CurrentDomain.BaseDirectory;

        private static Process? _serverProcess;

        public static void StartServer(string path)
        {
            if (_serverProcess == null || _serverProcess.HasExited)
            {
                _serverProcess = new Process();
                _serverProcess.StartInfo.FileName = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? "java.exe" : "java";
                _serverProcess.StartInfo.Arguments = $@"-jar {BaseDirectory}\Selenium\SeleniumServer\{ServerJarName} standalone";
                _serverProcess.StartInfo.WorkingDirectory = $@"{BaseDirectory}\Selenium\SeleniumServer\";
                _serverProcess.Start();
            }
        }

        public static void StopServer()
        {
            if (_serverProcess != null || !_serverProcess!.HasExited)
            {
                _serverProcess!.Kill();
                _serverProcess.Dispose();
                _serverProcess = null;
            }
        }
    }
}
