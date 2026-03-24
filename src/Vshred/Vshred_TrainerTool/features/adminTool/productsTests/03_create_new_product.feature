@smoke @QA-1236
Feature: Create New Products
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Create New Digital Product
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Products" page
        When The user creates a New "Digital" Product
        Then The new "Digital" Product created is now active
        Then Deletes the "Products" test data

    Scenario: Create New Physical Product
        Given The user logs into the VShred Admin Tool using an "admin" account
        And The user navigates to "Products" page
        When The user creates a New "Physical" Product
        Then The new "Physical" Product created is now active
        Then Deletes the "Products" test data
