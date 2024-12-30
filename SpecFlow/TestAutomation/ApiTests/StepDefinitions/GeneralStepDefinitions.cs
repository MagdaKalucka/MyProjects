using System.Text.Json;

using Common.Builders;
using Common.Clients;
using Common.Models.Dto;
using Common.Models.Responses;

using TechTalk.SpecFlow.Infrastructure;

namespace ApiTests.StepDefinitions
{
    [Binding]
    internal class GeneralStepDefinitions
    {
        private const string ListUserUrl = "/api/users?page=2";

        private const string SingleUserUrl = "/api/users/{0}";

        private const string SingleUserNotFoundUrl = "/api/users/23";

        private const string CreateUrl = "/api/users";

        private const string SingleResourceNotFoundUrl = "/api/unknown/23";

        private const string SingleResourceUrl = "/api/unknown/2";

        private const string ListResourceUrl = "/api/unknown";

        private const string RegisterlUrl = "/api/register";

        private const string LoginUrl = "/api/login";

        private readonly ApiClient _apiClient;

        private readonly ResponseDto _responseDto;

        private readonly UserDto _userDto;

        private readonly BaseGeneralSteps _baseGeneralSteps;

        private readonly ISpecFlowOutputHelper _outputHelper;

        internal GeneralStepDefinitions(ISpecFlowOutputHelper outputHelper, ResponseDto responseDto, UserDto userDto)
        {
            _apiClient = new ApiClient();
            _outputHelper = outputHelper;
            _responseDto = responseDto;
            _userDto = userDto;
            _baseGeneralSteps = new BaseGeneralSteps(outputHelper, responseDto);
        }

        [When(@"GET list users request is sent")]
        internal async Task GetListUsersRequestIsSent()
        {
            var response = await _apiClient.Get(ListUserUrl);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"GET list users response body properties have correct values")]
        internal void GetListUsersResponseBodyPropertiesHaveCorrectValues()
        {
            var users = JsonSerializer.Deserialize<GetListUsersResponse>(_responseDto.Content!);

            var data = users!.Data;

            users.Page.Should().Be(2);

            foreach (var item in data!)
            {
                item.Id.Should().NotBe(null);
                item.Email.Should().MatchRegex(BaseGeneralSteps.EmailRegex);
                item.FirstName.Should().MatchRegex(BaseGeneralSteps.NameRegex);
                item.LastName.Should().MatchRegex(BaseGeneralSteps.NameRegex);
                item.Avatar.Should().NotBe(null);
            }

            users.Support!.Text.Should().Be(BaseGeneralSteps.SupportText);
        }

        [When(@"GET single user request is sent")]
        internal async Task GetSingleUserRequestIsSent()
        {
            var response = await _apiClient.Get(string.Format(SingleUserUrl, 2));

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"GET single user response body properties have correct values")]
        internal void GetSingleUserResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<GetSingleUserResponse>(_responseDto.Content!);

            user!.Data!.Id.Should().Be(2);
            user.Data.Email.Should().MatchRegex(BaseGeneralSteps.EmailRegex);
            user.Data.FirstName.Should().MatchRegex(BaseGeneralSteps.NameRegex);
            user.Support!.Url.Should().NotBeNull();
            user.Support.Text.Should().Be(BaseGeneralSteps.SupportText);
        }

        [When(@"GET Single user request is sent when user does not exist")]
        internal async Task GetSingleUserRequestIsSentWhenUserDoesNotExist()
        {
            var response = await _apiClient.Get(SingleUserNotFoundUrl);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Given(@"user Id")]
        internal void GivenUserId()
        {
            var user = JsonSerializer.Deserialize<PostCreateResponse>(_responseDto.Content!);

            _userDto.Id = user!.Id;

            _outputHelper.WriteLine($"User Id: {_userDto.Id}");
        }

        [When(@"POST create request is sent")]
        internal async Task PostCreateRequestIsSent()
        {
            //var json = @"{""name"": ""morpheus"",""job"": ""leader""}";
            var request = new CreateRequestBuilder()
                .Create()
                .WithName(BaseGeneralSteps.CreateName)
                .WithJob(BaseGeneralSteps.CreateJob)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Post(CreateUrl, json);

            _baseGeneralSteps.WriteResponseDto(response);

            var user = JsonSerializer.Deserialize<PostCreateResponse>(_responseDto.Content!);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"POST create response body properties have correct values")]
        internal void PostCreateResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<PostCreateResponse>(_responseDto.Content!);

            user!.Name.Should().MatchRegex(BaseGeneralSteps.NameRegex);
            user.Job.Should().MatchRegex(BaseGeneralSteps.NameRegex);
            user.Id.Should().NotBe(null);
            user.CreatedAt.Should().BeCloseTo(DateTime.UtcNow, TimeSpan.FromSeconds(30));

            _outputHelper.WriteLine($"User name is: {user.Name}");
        }

        [When(@"GET single resource is sent when single resource does not exist")]
        internal async Task GetSingleResourceIsSentWhenSingleResourceDoesNotExist()
        {
            var response = await _apiClient.Get(SingleResourceNotFoundUrl);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [When(@"GET single resource is sent")]
        internal async Task GetSingleResourceIsSent()
        {
            var response = await _apiClient.Get(SingleResourceUrl);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"GET single resource response body properties have correct values")]
        internal void GetSingleResourceResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<GetSingleResourceResponse>(_responseDto.Content!);

            user!.Data!.Id.Should().NotBe(null);
            user.Data.Name.Should().MatchRegex(BaseGeneralSteps.NameRegex);
            user.Data.Year.ToString().Should().MatchRegex(BaseGeneralSteps.YearRegex);
            user.Data.Color.Should().MatchRegex(BaseGeneralSteps.ColorRegex);
            user.Data.PantoneValue.Should().MatchRegex(BaseGeneralSteps.PantoneValueRegex);

            user.Support!.Url.Should().NotBe(null);
            user.Support.Text.Should().Be(BaseGeneralSteps.SupportText);
        }

        [When(@"GET list resource is sent")]
        internal async Task GetListResourceIsSent()
        {
            var response = await _apiClient.Get(ListResourceUrl);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"GET list resource response body properties have correct values")]
        internal void GetListResourceResponseBodyPropertiesHaveCorrectValues()
        {
            var users = JsonSerializer.Deserialize<GetListResourceResponses>(_responseDto.Content!);

            var data = users!.Data;

            users.Page.Should().Be(1);
            users.PerPage.Should().Be(6);
            users.Total.Should().Be(12);
            users.TotalPages.Should().Be(2);

            foreach (var item in data!)
            {
                item.Id.Should().NotBe(null);
                item.Name.Should().MatchRegex(BaseGeneralSteps.NameRegex);
                item.Year.ToString().Should().MatchRegex(BaseGeneralSteps.YearRegex);
                item.Color.Should().MatchRegex(BaseGeneralSteps.ColorRegex);
                item.PantoneValue.Should().MatchRegex(BaseGeneralSteps.PantoneValueRegex);
            }

            users.Support!.Url.Should().NotBeNull();
            users.Support!.Text.Should().Be(BaseGeneralSteps.SupportText);
        }

        [When(@"PUT single user request is sent")]
        internal async Task PutSingleUserRequestIsSent()
        {
            var request = new SingleUserRequestBuilder()
                .Create()
                .WithName(BaseGeneralSteps.CreateName)
                .WithJob(BaseGeneralSteps.PutPatchJob)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Put(string.Format(SingleUserUrl, _userDto.Id));

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"PUT single user response body properties have correct values")]
        internal void PutSingleUserResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<UpdateResponses>(_responseDto.Content!);

            user!.UpdatedAt.Should().BeCloseTo(DateTime.UtcNow, TimeSpan.FromSeconds(30));
        }

        [When(@"PATCH single user request is sent")]
        internal async Task PatchSingleUserRequestIsSent()
        {
            var request = new SingleUserRequestBuilder()
                .Create()
                .WithName(BaseGeneralSteps.CreateName)
                .WithJob(BaseGeneralSteps.PutPatchJob)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Patch(string.Format(SingleUserUrl, _userDto.Id));

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"PATCH single user response body properties have correct values")]
        internal void PatchSingleUserResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<UpdateResponses>(_responseDto.Content!);

            user!.UpdatedAt.Should().BeCloseTo(DateTime.UtcNow, TimeSpan.FromSeconds(30));
        }

        [When(@"POST register user is sent")]
        internal async Task PostRegisterUserIsSent()
        {
            string password = "pistol";

            var request = new RegisterUserRequestBuilder()
                .Create()
                .WithEmail(BaseGeneralSteps.LoginEmail)
                .WithPassword(password)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Post(RegisterlUrl, json);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"POST register user response body properties have correct values")]
        internal void PostRegisterUserResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<PostRegisterSuccessfulResponses>(_responseDto.Content!);

            user!.Id.Should().Be(4);
            user.Token.Should().Be(BaseGeneralSteps.Token);
        }

        [When(@"POST register user is sent without password")]
        internal async Task PostRegisterUserIsSentWithoutPassword()
        {
            var request = new RegisterUserRequestBuilder()
                            .Create()
                            .WithEmail(BaseGeneralSteps.LoginEmail)
                            .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Post(RegisterlUrl, json);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"POST register response body properties have error message")]
        internal void PostRegisterResponseBodyPropertiesHaveErrorMessage()
        {
            var user = JsonSerializer.Deserialize<PostUnccessfulResponses>(_responseDto.Content!);

            user!.Error.Should().Be(BaseGeneralSteps.MissingPassword);
        }

        [When(@"POST login user is sent")]
        internal async Task PostLoginUserIsSent()
        {
            string password = "cityslicka";

            var request = new LoginUserRequestBuilder()
                .Create()
                .WithEmail(BaseGeneralSteps.LoginEmail)
                .WithPassword(password)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Post(LoginUrl, json);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"POST login user response body properties have correct values")]
        internal void PostLoginUserResponseBodyPropertiesHaveCorrectValues()
        {
            var user = JsonSerializer.Deserialize<PostLoginSuccessfulResponses>(_responseDto.Content!);

            user!.Token.Should().Be(BaseGeneralSteps.Token);
        }

        [When(@"POST login user is sent without password")]
        internal async Task PostLoginUserIsSentWithoutPassword()
        {
            string email = "peter@klaven";

            var request = new LoginUserRequestBuilder()
                .Create()
                .WithEmail(email)
                .Build();

            var json = JsonSerializer.Serialize(request);

            var response = await _apiClient.Post(LoginUrl, json);

            _baseGeneralSteps.WriteResponseDto(response);

            _outputHelper.WriteLine($"Request: {json}");
            _outputHelper.WriteLine($"Response: {response.Content}");
        }

        [Then(@"POST login response body properties have error message")]
        internal void PostLoginResponseBodyPropertiesHaveErrorMessage()
        {
            var user = JsonSerializer.Deserialize<PostUnccessfulResponses>(_responseDto.Content!);

            user!.Error.Should().Be(BaseGeneralSteps.MissingPassword);
        }

        [When(@"DELETE single user request is sent")]
        internal async Task DeleteSingleUserRequestIsSent()
        {
            var response = await _apiClient.Delete(string.Format(SingleUserUrl, _userDto.Id));

            _baseGeneralSteps.WriteResponseDto(response);
        }
    }
}
