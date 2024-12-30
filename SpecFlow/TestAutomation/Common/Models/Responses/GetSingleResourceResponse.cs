using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class GetSingleResourceResponse
    {
        [JsonPropertyName("data")]
        public Data1? Data { get; set; }

        [JsonPropertyName("support")]
        public Support? Support { get; set; }
    }
}
