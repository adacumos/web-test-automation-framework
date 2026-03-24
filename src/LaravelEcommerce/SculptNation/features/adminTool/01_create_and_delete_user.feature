@beta @smoke @QA-587 @QA-1717 @MD @GIT @adminTool
Feature: User creation, edit password, search for user and deletion in Admin Tool
    Background: Load test data
        Given The user loads the LE test data
        And The user logs into the Admin Tool using an account with "admin" credentials

    Scenario: Create a new test user / delete the new test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        And The user searches for the user
        And The user deletes the test user in the Admin Tool
