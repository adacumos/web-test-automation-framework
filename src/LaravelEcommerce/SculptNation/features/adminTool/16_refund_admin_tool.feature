@QA-1615 @MD @adminTool
Feature: Refund in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Refund page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Refund" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Refund URL in Refund page
        # And The user verifies the table headers in Refund page
        When The user clicks on the back arrow in Refund page
        Then The user Verifies the Orders URL in Orders page
