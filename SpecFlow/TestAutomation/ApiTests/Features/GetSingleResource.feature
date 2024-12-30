Feature: GetSingleResource

GET /{resource}/{id} - Fetches an unknown resource

Scenario: 01 - Get single resource
	When GET single resource is sent
	Then response status code is '200 OK'
	And GET single resource response body properties have correct values
	And response body should match 'SingleResource' json schema

Scenario: 02 - Get single resource not found 
	When GET single resource is sent when single resource does not exist
	Then response status code is '404 Not Found'
