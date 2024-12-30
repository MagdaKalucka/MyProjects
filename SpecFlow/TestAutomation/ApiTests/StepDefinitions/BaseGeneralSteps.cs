using System.Reflection;

using Common.Models.Responses;

using Newtonsoft.Json.Linq;

using NJsonSchema;

using RestSharp;

using TechTalk.SpecFlow.Infrastructure;

namespace ApiTests.StepDefinitions
{
    [Binding]
    public class BaseGeneralSteps
    {
        public const string EmailRegex = "[a-z]+\\.?[a-z]+@[a-z]+\\.[a-z]{2,3}$";

        public const string NameRegex = "[A-Za-z]";

        public const string YearRegex = "[0-9]{4}";

        public const string ColorRegex = "#+[A-Z0-9*]{6}";

        public const string PantoneValueRegex = "[0-9]{2}-[0-9]{4}";

        public const string SupportText = "Tired of writing endless social media content? Let Content Caddy generate it for you.";

        public const string Token = "QpwL5tke4Pnpja7X4";

        public const string MissingPassword = "Missing password";

        public const string CreateName = "morpheus";

        public const string CreateJob = "leader";

        public const string PutPatchJob = "zion resident";

        public const string LoginEmail = "eve.holt@reqres.in";

        private readonly ResponseDto _responseDto;

        private readonly ISpecFlowOutputHelper _outputHelper;

        internal BaseGeneralSteps(ISpecFlowOutputHelper outputHelper, ResponseDto responseDto)
        {
            _outputHelper = outputHelper;
            _responseDto = responseDto;
        }

        internal void WriteResponseDto(RestResponse response)
        {
            _responseDto.Content = response.Content;
            _responseDto.StatusCode = response.StatusCode;
            _responseDto.StatusDescription = response.StatusDescription;
        }

        [Then(@"response status code is '(.*)'")]
        internal void ResponseStatusCodeIs(string statusCode)
        {
            var responseStatusCode = $"{(int)_responseDto.StatusCode} {_responseDto.StatusDescription}";

            _outputHelper!.WriteLine($"Response code: {responseStatusCode}");

            responseStatusCode.Should().Be(statusCode);
        }

        [Then(@"response body should match '(.*)' json schema")]
        internal void ResponseBodyShouldMatchJsonSchema(string schemaName)
        {
            var schemaPath = Path.Combine(
                Path.GetDirectoryName(Assembly.GetExecutingAssembly()
                .Location) ?? string.Empty, "Schemas",
                $"{schemaName}.json");

            var jsonSchema = JsonSchema.FromFileAsync(schemaPath).GetAwaiter().GetResult();

            var responseJson = JObject.Parse(_responseDto.Content!);

            var errors = jsonSchema.Validate(responseJson);

            errors.Should().BeEmpty();
            errors.Count().Should().Be(0);

            _outputHelper.WriteLine($"Json schema: {jsonSchema.ToJson()}");
            _outputHelper.WriteLine($"Respone json: {responseJson}");
        }
    }
}
