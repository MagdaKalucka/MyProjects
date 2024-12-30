namespace Common.Configuration.Models
{
    public class Selenium
    {
        public string? Browser { get; set; }

        public bool Headless { get; set; }

        public bool RunOnSeleniumGrid { get; set; }

        public string? SeleniumGridUri { get; set; }

        public bool TakeScreenshotsAfterStep { get; set; }

        public bool TakeScreenshotsAfterScenario { get; set; }
    }
}
