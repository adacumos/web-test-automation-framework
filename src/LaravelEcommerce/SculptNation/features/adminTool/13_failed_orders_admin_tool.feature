@QA-1617 @MD @adminTool
Feature: Failed Orders in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Failed orders page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Failed Orders" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Failed Orders URL in Failed Orders page
