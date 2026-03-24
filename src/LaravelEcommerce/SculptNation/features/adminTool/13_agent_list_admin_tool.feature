@QA-1598 @MD @adminTool
Feature: Agent List in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Agent List page and Redirects within the page.
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Agent List" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Agent List URL in Agent List page
        And The user enters the "agent id" in the search textbox

    Scenario: Login as admin and Verfiy the create, edit and delete of Agent List Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Agent List" button from the sidebar menu of the Admin Tool Dashboard
        And The user clicks on the "create sales agent" button
        And The user fills the data for all the fields in the agent list page and clicks on the create sales agent button
        Then The user verifies the "created" sales agent
        When The user click on the edit sales agent icon and fills the updated agency name and clicks on the update sales agent button
        Then The user verifies the "updated" sales agent
