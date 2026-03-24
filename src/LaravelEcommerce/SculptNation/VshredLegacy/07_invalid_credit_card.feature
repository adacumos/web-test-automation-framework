@vsBeta
Feature: Invalid Credit Card

    Background: Load test data
        Given The user loads the LE test data

    Scenario: Invalid Credit Card
        Given The user visits the legacy VShred Fatloss Extreme for "her" URL
        Then The user clicks the legacy Fatloss Extreme buy button
        When The user fills out invalid credit card Order Form information and submits the order
        Then The user verifies the invalid credit card message
        And the user was not able to proceed to the submit order section
