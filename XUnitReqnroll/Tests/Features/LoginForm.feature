Feature: LoginForm

As a user who is not logged in, I want to log in to the application

Background: 
	Given User opens saucedemo page

@daily
Scenario: UC-1 Test - Login form with empty credentials
	When User enters username: test_user
	And User enters password
	And User clears the 'Username' input
	And User clears the 'Password' input
	And User clicks the 'Login' button
	Then User gets error message: Epic sadface: Username is required

@daily
Scenario: UC-2 Test - Login form with credentials by passing Username
	When User enters username: test_user
	And User enters password
	And User clears the 'Password' input
	And User clicks the 'Login' button
	Then User gets error message: Epic sadface: Password is required

@daily @smoke
Scenario: UC-3 Test - Login form with credentials by passing Username & Password
	When User enters username: <username>
	And User enters password
	And User clicks the 'Login' button
	Then User is redirected to the Inventory page
	And User sees title Swag Labs on the dashboard

	Examples: 
	| username                |
	| standard_user           |
	| problem_user            |
	| performance_glitch_user |
	| error_user              |
	| visual_user             |
