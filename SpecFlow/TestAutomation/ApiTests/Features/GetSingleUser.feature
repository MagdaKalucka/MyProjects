Feature: GetSingleUser

GET /users/{id} - Fetches a user

Scenario: 01 - Get single user
	When GET single user request is sent
	Then response status code is '200 OK'
	And GET single user response body properties have correct values
	And response body should match 'GetSingleUser' json schema

Scenario: 02 - Get single user not exist
	When GET Single user request is sent when user does not exist
	Then response status code is '404 Not Found'






