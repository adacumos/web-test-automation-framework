@smoke @QA-1220
Feature: Search and Edit Existing Bundles
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Search and edit existing Bundles
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Bundles" page
        When The user searches and edit an existing bundle
        Then The updated "Bundles" is reloaded with the updated values
        And Revert "Bundles" changes to original state

