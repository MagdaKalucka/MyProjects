Feature: Subscription

User can sign up into subscription 

Background: 
	Given User opens Automation Exercise page
	And User clicks pop up button
	And User goes to the page bottom

@smoke 
Scenario: Send subscription (successful)
	When User fills email
	And User clicks send button 
	Then User receives information about successful subscription

@smoke
Scenario Outline: Send subscription (unsuccessful) - Not full email
	When User fills email: <Email>
	And User clicks send button 
	Then User gets message: <Message>

	Examples: 
	| Email        | Message                                                                       |
	| userExamples | Please include an '@' in the email address. 'userExamples' is missing an '@'. |
	| @gmail.com   | Please enter a part followed by '@'. '@gmail.com' is incomplete.              |
	|              | Please fill out this field.                                                    |