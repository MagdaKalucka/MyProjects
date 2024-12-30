Feature: PostRegisterUser

POST /register - Creates a user

Scenario: 01 - Post register user
	When POST register user is sent
	Then response status code is '200 OK'
	And POST register user response body properties have correct values
	And response body should match 'RegisterUser' json schema

Scenario: 02 - Post register user unsuccessful
	When POST register user is sent without password
	Then response status code is '400 Bad Request'
	And POST register response body properties have error message
	And response body should match 'Error' json schema

