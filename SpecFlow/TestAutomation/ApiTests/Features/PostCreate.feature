Feature: PostCreate

POST /users - Creates a user

Scenario: 01 - Post Create
	When POST create request is sent
	Then response status code is '201 Created'
	And POST create response body properties have correct values
	And response body should match 'Create' json schema
