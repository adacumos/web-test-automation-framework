@QA-2565
Feature: LE Admin Verify CS Role page access
    Background: Load test data
        Given The user loads the LE test data
        And The user logs into the Admin Tool using an account with "admin" credentials
    Scenario: Create new CS test user / Verify does not have access to Roles page
        When The user creates a new test user in the Admin Tool
        And The user sees the User Information page for the newly created test user
        When The user attaches the "Customer Service" role to the user
        Then The user verifies the "Customer Service" role of the user
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "Customer Service" credentials
        Then Verify user do not have access to "Roles" admin resource page
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        Then The user deletes the test user in the Admin Tool
