
@QA-1602 @MD @adminTool
Feature: LE Admin menu - Tax Nexuses
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu Tax Nexuses are working and creates a new Tax Nexuses and then removes it
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Tax Nexuses" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the table is populated with entries
        Then The user Verifies each table entry details are populated
        Then The user creates a new Tax Nexuses
        When The user clicks on the "Tax Nexuses" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the newly created Tax Nexuses
        Then The user Deletes the newly created Tax Nexuses
        Then The user Verifies the newly created Tax Nexuses no longer exists
