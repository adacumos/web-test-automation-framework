@FET-1137 @FET-1137 @FE-sprint-6 @frontend
Feature: Verify user can buy the VSU from the home page
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Buy the VSU from home page
        Given The user starts on "VShred" "Home page" page
        Then The user selects VSU from home page
        Then The user selects vsu and purchases
        Then The user fills out the survey order form
        Then Select the submit button if its still visible
        Then Validate the Thank you order page
