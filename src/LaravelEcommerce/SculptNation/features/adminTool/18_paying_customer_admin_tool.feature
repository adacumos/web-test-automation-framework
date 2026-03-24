@QA-1619 @MD @adminTool
Feature: Paying Customersin Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Paying Customers page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Paying Customers" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Paying Customers URL in Paying Customers page
        And The user verifies the table and table headers in Paying Customers page
        And The user Verifies the table is existed with entries in Paying Customer page
