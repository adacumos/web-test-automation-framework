@Prodution @Blue
Feature: Connect to Canary Server
    Background: Load test data
        Given The user loads the LE test data


    Scenario: Connect to Canary Server
        Then Connects to LE Blue Production Server
        Then Connects to SN Blue Production Server
        Then Connects to LE Orange Production Server
        Then Connects to SN Orange Production Server


