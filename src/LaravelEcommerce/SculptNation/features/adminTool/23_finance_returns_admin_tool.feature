@QA-1726 @MD @adminTool
Feature: Returns in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Returnd page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Returns" button from the sidebar menu of the Admin Tool Dashboard
        Then The user verifies the Returns URL in Returns page
        And The user Verifies the table is populated with entries
        And The user Verifies each table entry details are populated

    Scenario: Login as admin and Verfiy the create, edit and delete of SMS Message Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Returns" button from the sidebar menu of the Admin Tool Dashboard
        And The user clicks on the "Create Return" button
        And The user fills the data for the fields and click on the create return button in the returns page
        Then The user verifies the "Created" return
        When The user clicks on the "Edit" connection button in the connections page
        And The user fills the updated reason for the fields in the returns page
        And The user clicks on the "Update" message button in the messages page
        Then The user verifies the "Updated" return
        When The user clicks on the "Delete" connection button in the connections page
        And The user clicks on the confirm delete button
