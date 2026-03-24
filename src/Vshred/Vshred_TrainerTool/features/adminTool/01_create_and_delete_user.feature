@smoke
Feature: User creation and deletion in VShred Admin Tool
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Create a new test user / delete the new test user
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user creates a new test user
        Then The user views the User Information page for the newly created test user
        And The user deletes the newly created test user

