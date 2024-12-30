using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class PostLoginSuccessfulResponses
    {
        [JsonPropertyName("token")]
        public string? Token { get; set; }
    }
}
