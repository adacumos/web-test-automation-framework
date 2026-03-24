@smoke @QA-1236
Feature: Search and Edit Existing Producs
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Search and edit existing Products
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Products" page
        When The user searches and edit an existing product
        Then The updated "Products" is reloaded with the updated values
        And Revert "Products" changes to original state

