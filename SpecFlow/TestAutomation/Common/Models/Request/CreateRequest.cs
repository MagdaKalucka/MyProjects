using System.Text.Json.Serialization;

namespace Common.Models.Request
{
    public class CreateRequest
    {
        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [JsonPropertyName("job")]
        public string? Job { get; set; }
    }
}
