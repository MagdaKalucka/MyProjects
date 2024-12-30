Feature: SignUp

User can sign up 

Background: 
	Given User opens Automation Exercise page
	And User clicks pop up button
	When User clicks Signup / Login link 
	Then User is redirected to the Signup / Login page

@smoke
Scenario: Sign up (successful) with delete account
	When User fills name
	And User fills new email
	And User clicks Signup button
	Then User is redirected to the signup page
	When User selects his / her gender
	And User selects date of birth
	And User fills required fields
	And User clicks Create Account button 
	Then User is redirected to the created account page
	When User clicks continue button
	Then User is redirected to the home page
	When User clicks Delete Account link
	Then User is redirected to the deleted account page
	When User clicks continue button 
	Then User is redirected to the home page

@daily
Scenario: Sign up (unsuccessful) - User exists
	When User fills name
	And User fills exist user email
	And User clicks Signup button
	Then User gets message about exist user

@daily
Scenario: Sign up (unsuccessful) - Empty name
	When User fills new email
	And User clicks Signup button
	Then User gets message fill out this field

@daily
Scenario Outline: Sign up (unsuccessful) - Uncorrect email
	When User fills name
	When User fills incorrect email: <Email>
	And User clicks Signup button 
	Then User gets error <Message>

	Examples:
	| Email        | Message                                                                       |
	| userExamples | Please include an '@' in the email address. 'userExamples' is missing an '@'. |
	| @gmail.com   | Please enter a part followed by '@'. '@gmail.com' is incomplete.              |
	|              | Please fill out this field.                                                    |

@daily
Scenario: Sign up (unsuccessful) - Empty field
	When User fills name
	And User fills new email
	And User clicks Signup button
	Then User is redirected to the signup page
	When User clicks Create Account button
	Then User gets notification about empty field