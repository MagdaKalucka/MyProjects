using Serilog;

namespace Core.Logger
{
    public class Serilog
    {
        public void LogConfiguration()
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .WriteTo.File($"logs/testResoult.txt",
                    outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}",
                    rollingInterval: RollingInterval.Day,
                    shared: true)
                .CreateLogger();
        }

        public void WriteToLog(string message)
        {
            Log.Information(message);
        }
        public void Flush()
        {
            Log.CloseAndFlush();
        }
    }
}
