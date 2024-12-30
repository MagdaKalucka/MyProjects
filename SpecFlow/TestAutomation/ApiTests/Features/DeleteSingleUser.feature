Feature: DeleteSingleUser

DELETE /users/{id} - Deletes a user

Scenario: 01 - Delete single user
	When POST create request is sent
	Given user Id
	When DELETE single user request is sent
	Then response status code is '204 No Content'
