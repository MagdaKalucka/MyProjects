Feature: PostLoginUser

POST /login - Creates a session

Scenario: 01 - Post login user
	When POST login user is sent
	Then response status code is '200 OK'
	And POST login user response body properties have correct values
	And response body should match 'LoginUser' json schema

Scenario: 02 - Post login user unsuccessful
	When POST login user is sent without password
	Then response status code is '400 Bad Request'
	And POST login response body properties have error message
	And response body should match 'Error' json schema