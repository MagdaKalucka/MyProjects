namespace Common.Configuration
{
    public class TestArtifactsDirectoryCreator
    {
        public static readonly string TestReportDirectory = "TestReport";

        internal static readonly string Path = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, TestReportDirectory!);

        public static DirectoryInfo? CreateTestReportDirectory()
        {
            DeleteDirectory(Path);
            var directory = Directory.CreateDirectory(Path);

            return directory;
        }

        private static void DeleteDirectory(string path)
        {
            if (!Directory.Exists(path))
                return;

            DirectoryInfo directory = new DirectoryInfo(path);

            foreach (FileInfo file in directory.GetFiles())
            {
                file.Delete();
            }

            foreach (DirectoryInfo dir in directory.GetDirectories())
            {
                dir.Delete(true);
            }

            Directory.Delete(path);
        }
    }
}
