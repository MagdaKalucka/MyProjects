using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class PostRegisterSuccessfulResponses
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("token")]
        public string? Token { get; set; }
    }
}
