Feature: ContactUs

User can send message to the Contact us page. 

Background: 
	Given User opens Automation Exercise page
	And User clicks pop up button
	When User cliks Contact us link
	Then User is redirected to the Contact us page

@smoke
Scenario: Send message (successful) - Full form
	When User fills name, email, subject and message
	And User clicks submit button
	And User clicks Ok in alert
	Then User sends correct message
	When User can come back to home page
	Then User is redirected to the home page

@smoke
Scenario: Send message (successful) - Form only with email
	When Users fills only email
	And User clicks submit button
	And User clicks Ok in alert
	Then User sends correct message

@daily
Scenario: Send message (unsuccessful) - Empty form
	When User clicks submit button
	Then User can't send form - fill out this field

@smoke
Scenario: Send message (unsuccessful) - Form without email
	When User fills name, subject and message
	And User clicks submit button
	Then User can't send form - fill out this field 

@smoke
Scenario: Send message (unsuccessful) - Form with incorrect email
	When User fills incorrect email in contact us form
	And User clicks submit button
	Then User can't sent form - incorrect email messaage