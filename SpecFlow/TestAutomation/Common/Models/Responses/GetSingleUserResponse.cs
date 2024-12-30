using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class GetSingleUserResponse
    {
        [JsonPropertyName("data")]
        public Data? Data { get; set; }

        [JsonPropertyName("support")]
        public Support? Support { get; set; }
    }
}
