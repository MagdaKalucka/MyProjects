using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class PostUnccessfulResponses
    {
        [JsonPropertyName("error")]
        public string? Error { get; set; }
    }
}
