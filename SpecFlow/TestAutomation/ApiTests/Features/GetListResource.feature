Feature: GetListResource

GET /{resource} - Fetches a resource list

Scenario: 01- Get list resource
	When GET list resource is sent
	Then response status code is '200 OK'
	And GET list resource response body properties have correct values
	And response body should match 'GetListResource' json schema
