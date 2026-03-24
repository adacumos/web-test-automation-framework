
Feature: Update Envoyer environment variables

    Scenario: Set Klaviyo environment variable to False
        Given The user logs into Envoyer
        When The user navigates to Envoyer test environment
        Then The user updates the "KLAVIYO_ENABLED" environment variable to "false" on the test server
        And The user deploys a branch to the test environment
