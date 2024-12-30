using System.Net;

namespace Common.Models.Responses
{
    public class ResponseDto
    {
        public string? Content { get; set; }

        public HttpStatusCode StatusCode { get; set; }

        public string? StatusDescription { get; set; }
    }
}
