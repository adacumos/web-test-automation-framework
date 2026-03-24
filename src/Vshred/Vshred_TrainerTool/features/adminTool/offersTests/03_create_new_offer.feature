@smoke @QA-1221
Feature: Add New Offer
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Add New Offer
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Offers" page
        When The user creates a New Offer
        Then The new "Offers" created is now active
        Then Deletes the "Offers" test data
