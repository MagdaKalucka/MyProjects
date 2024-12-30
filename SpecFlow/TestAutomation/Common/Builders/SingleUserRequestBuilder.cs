using Common.Models.Request;

namespace Common.Builders
{
    public class SingleUserRequestBuilder
    {
        private UpdateRequest? _request;

        public SingleUserRequestBuilder Create()
        {
            _request = new UpdateRequest();
            return this;
        }

        public SingleUserRequestBuilder WithName(string name)
        {
            _request!.Name = name;
            return this;
        }

        public SingleUserRequestBuilder WithJob(string job)
        {
            _request!.Job = job;
            return this;
        }

        public UpdateRequest Build()
        {
            return _request!;
        }
    }
}
