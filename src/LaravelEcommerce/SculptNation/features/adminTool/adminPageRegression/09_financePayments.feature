@QA-1650 @MD @adminTool
Feature: LE Admin Page Regression - Finance > Payments
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Finance > Payments pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Payments" menu from the Admin Tool Dashboard
        Then The Finance "Payments" pages are loaded
        When The user captures the "Payments" resource details
        And The user navigates to Payment's "Orders" resource links
        Then The Payment details are synced with "Orders" resource
        When The user navigates to Payment's "Users" resource links
        Then The Payment details are synced with "Users" resource
        When The user navigates to Payment's "User-Payment-Methods" resource links
        Then The Payment details are synced with "User-Payment-Methods" resource
