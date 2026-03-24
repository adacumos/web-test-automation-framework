
Feature: Update Envoyer environment variables

    Scenario: Set Default Fraud Driver environment variable to Dummy
        Given The user logs into Envoyer
        When The user navigates to Envoyer test environment
        Then The user updates the "DEFAULT_FRAUD_DRIVER" environment variable to "Dummy" on the test server
        And The user deploys a branch to the test environment
