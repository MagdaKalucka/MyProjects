using Common.Models.Request;

namespace Common.Builders
{
    public class LoginUserRequestBuilder
    {
        private PostLoginRequest? _request;

        public LoginUserRequestBuilder Create()
        {
            _request = new PostLoginRequest();
            return this;
        }

        public LoginUserRequestBuilder WithEmail(string email)
        {
            _request!.Email = email;
            return this;
        }

        public LoginUserRequestBuilder WithPassword(string password)
        {
            _request!.Password = password;
            return this;
        }

        public PostLoginRequest Build()
        {
            return _request!;
        }
    }
}
