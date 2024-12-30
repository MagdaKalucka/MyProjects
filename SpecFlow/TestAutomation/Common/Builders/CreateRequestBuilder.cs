using Common.Models.Request;

namespace Common.Builders
{
    public class CreateRequestBuilder
    {
        private CreateRequest? _request;

        public CreateRequestBuilder Create()
        {
            _request = new CreateRequest();
            return this;
        }

        public CreateRequestBuilder WithName(string name)
        {
            _request!.Name = name;
            return this;
        }

        public CreateRequestBuilder WithJob(string job)
        {
            _request!.Job = job;
            return this;
        }

        public CreateRequest Build()
        {
            return _request!;
        }
    }
}
