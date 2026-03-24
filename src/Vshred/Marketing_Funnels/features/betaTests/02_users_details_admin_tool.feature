@smoke @GIT

Feature: Admin tool User creation and modification of user details
    Background: Load test data
        Given The user loads the VS test data
        And The user logs into the admin menu
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user

    Scenario: Create a new test user / edit email to other existing user/ error message displayed
        Then The user updates the users email to all ready existing user and encounters error

    Scenario: Create a new test user / edits email / Success message is displayed
        Then The user updates the users email

    Scenario: Create a new test user / edit phone details/ Success message is displayed
        Then The user updates the users phone details

    Scenario: Create a new test user / edit password to same password / error message displayed
        Then The user updates the users password to same password and encounters error

    Scenario: Create a new test user / edit password / Success message is displayed
        Then The user edits the users password

    Scenario: Create a new test user / edit password but inccorect password in confirm password field / error message displayed
        Then The user updates the users password with incorrect password in confirm password field and error is encountered
