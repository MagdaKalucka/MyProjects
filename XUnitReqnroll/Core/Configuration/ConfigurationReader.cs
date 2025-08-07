using Microsoft.Extensions.Configuration;

namespace Core.Configuration
{
    public class ConfigurationReader
    {
        public static Appsettings? GetConfiguration()
        {
            var appsettings = BuildConfiguration();

            return appsettings;
        }

        private static Appsettings? BuildConfiguration()
        {
            var assembly = AppDomain.CurrentDomain.BaseDirectory;

            var builder = new ConfigurationBuilder()
                .SetBasePath(assembly)
                .AddJsonFile("appsettings.json")
                .Build()
                .GetSection("appsettings")
                .Get<Appsettings>();

            return builder;
        }
    }
}
