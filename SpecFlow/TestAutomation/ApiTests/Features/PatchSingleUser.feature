Feature: PatchSingleUser

PATCH - /users/{id} - Updates a user

Scenario: 01 - Patch single user is update
	When POST create request is sent
	Given user Id
	When PATCH single user request is sent
	Then response status code is '200 OK'
	And PATCH single user response body properties have correct values
