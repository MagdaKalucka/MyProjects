Feature: GetListUsers

GET /users - Fetches a user list

Scenario: 01 - Get list users
	When GET list users request is sent
	Then response status code is '200 OK'
	And GET list users response body properties have correct values
	And response body should match 'ListUsers' json schema