Feature: PutSingleUser

PUT /users/{id} - Updates a user

Scenario: 01 - Put signle user is update
	When POST create request is sent
	Given user Id
	When PUT single user request is sent
	Then response status code is '200 OK'
	And PUT single user response body properties have correct values
