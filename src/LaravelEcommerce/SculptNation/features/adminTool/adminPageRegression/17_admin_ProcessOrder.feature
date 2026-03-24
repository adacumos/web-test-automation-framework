@QA-1739 @MD @adminTool
Feature: LE Admin Page Regression - Process Order
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create new User through the Process Order page
        Given The user navigates to "Process Order" sidebar menu
        Then The user creates a new user through the Process Order page
        And The user captures the "iFrame-User" resource details

    Scenario: Create New Order through the Process Order page
        Given The user navigates to "Process Order" sidebar menu
        And Searches a user through the Process Order page
        Then Creates an order through the Process Order page

    Scenario: View User Orders through the Process Order page
        Given The user navigates to "Process Order" sidebar menu
        And Searches a user through the Process Order page
        Then View All Orders through the Process Order page
