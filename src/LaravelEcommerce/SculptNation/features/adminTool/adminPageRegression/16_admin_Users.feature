@QA-1740 @smoke @beta @MD @GIT @hotfixes @adminTool
Feature: LE Admin Page Regression - Users
    Background: Load test data
        Given The user loads the LE test data
        And The user logs into the Admin Tool using an account with "admin" credentials

    Scenario: Create new User through LE Admin as reference user
        When The user creates a new test user in the Admin Tool
        And The user captures the "Users" resource details

    Scenario: Update user email to an existing email on record
        When The user creates a new test user in the Admin Tool
        And Updates email to existing email on record
        Then Delete test User data created

    Scenario: Add Address and Phone Details to User account
        When The user clicks on the "Users" button from the sidebar menu of the Admin Tool Dashboard
        And The user Creates a new Address through the User Admin page

    Scenario: Update Client User Name Details
        When The user clicks on the "Users" button from the sidebar menu of the Admin Tool Dashboard
        And The user searches and updates the User Name Details

    Scenario: Update Client user password with mismatched password details
        When The user clicks on the "Users" button from the sidebar menu of the Admin Tool Dashboard
        And The user updates the password with mismatched password details

    Scenario: Update Client user password with valid password details
        When The user clicks on the "Users" button from the sidebar menu of the Admin Tool Dashboard
        And The user changes the Client user password

    Scenario: Update Client user password with the same active password
        When The user clicks on the "Users" button from the sidebar menu of the Admin Tool Dashboard
        And The user updates the password with the same active password
        Then Delete test User data created


