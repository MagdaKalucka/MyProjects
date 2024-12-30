using Common.Models.Request;

namespace Common.Builders
{
    public class RegisterUserRequestBuilder
    {
        private PostRegisterRequest? _request;

        public RegisterUserRequestBuilder Create()
        {
            _request = new PostRegisterRequest();
            return this;
        }

        public RegisterUserRequestBuilder WithEmail(string email)
        {
            _request!.Email = email;
            return this;
        }

        public RegisterUserRequestBuilder WithPassword(string password)
        {
            _request!.Password = password;
            return this;
        }

        public PostRegisterRequest Build()
        {
            return _request!;
        }
    }
}
