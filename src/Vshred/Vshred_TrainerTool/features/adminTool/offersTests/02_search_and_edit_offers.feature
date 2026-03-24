@smoke @QA-1221
Feature: Search And Edit Existing Offers
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Search and Edit Existing Offers
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Offers" page
        When The user search and edit an existing Offer
        Then The updated "Offers" is reloaded with the updated values
        And Revert "Offers" changes to original state
