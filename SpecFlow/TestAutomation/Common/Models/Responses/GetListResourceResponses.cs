﻿using System.Text.Json.Serialization;

namespace Common.Models.Responses
{
    public class GetListResourceResponses
    {
        [JsonPropertyName("page")]
        public int Page { get; set; }

        [JsonPropertyName("per_page")]
        public int PerPage { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }

        [JsonPropertyName("total_pages")]
        public int TotalPages { get; set; }

        [JsonPropertyName("data")]
        public List<Data1>? Data { get; set; }

        [JsonPropertyName("support")]
        public Support? Support { get; set; }
    }
}