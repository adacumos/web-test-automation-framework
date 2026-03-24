@beta @smoke @FET-826 @FE-sprint-4 @frontend
Feature: 14 Day Metabolic Reset Challenge - Verify joining pages
    Background: Load test data
        Given The user loads the LE test data

    Scenario: 14 Day Metabolic Reset Challenge - Verify user can enter name and email
        Given The user starts on "LE VShred" "14 Day challange" page
        Then Verify the Metabolism-Boosting Shortcuts page
        Then Enter users name and email before signing up for free
        Then User verifies the thanks for joining page
        Then Select facebook group button

    Scenario: 14 Day Metabolic Reset Challenge - Select the sign up for free before entering name and email
        Given The user starts on "LE VShred" "14 Day challange" page
        Then Verify the Metabolism-Boosting Shortcuts page
        Then User select the sign me up button without entering name and email
        Then Enter users name and email before signing up for free
        Then User verifies the thanks for joining page
