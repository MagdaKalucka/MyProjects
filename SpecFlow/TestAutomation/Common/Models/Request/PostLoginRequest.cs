using System.Text.Json.Serialization;

namespace Common.Models.Request
{
    public class PostLoginRequest
    {
        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("password")]
        public string? Password { get; set; }
    }
}
