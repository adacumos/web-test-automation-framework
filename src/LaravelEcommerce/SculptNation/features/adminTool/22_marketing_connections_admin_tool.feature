@QA-1730 @QA-1771
Feature: Marketing Connections in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Connections page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Connections" button from the sidebar menu of the Admin Tool Dashboard
        Then The user verifies the connections URL in connections page
        And The user Verifies the table is populated with entries
        And The user Verifies each table entry details are populated

    Scenario: Login as admin and Verfiy the Connections Search Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Connections" button from the sidebar menu of the Admin Tool Dashboard
        And The user enters the "connection id" in the search textbox
        Then The user Verifies all "connection id" Details fields

    Scenario: Login as admin and Verfiy the create, edit and delete of SMS Message Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Connections" button from the sidebar menu of the Admin Tool Dashboard
        And The user clicks on the "Create Connection" button
        And The user fills the data for the fields in the connections page
        And The user clicks on the "Create Connection" button
        Then The user verifies the "Created" connection
        When The user clicks on the "Edit" connection button in the connections page
        And The user fills the updated connect name for the fields in the connections page
        And The user clicks on the "Update" message button in the messages page
        Then The user verifies the "Updated" connection
        When The user clicks on the "Delete" connection button in the connections page
        And The user clicks on the confirm delete button
