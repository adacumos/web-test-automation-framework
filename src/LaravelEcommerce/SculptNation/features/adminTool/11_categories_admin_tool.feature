@QA-1599 @MD @adminTool
Feature: LE Admin menu - Categories
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu Categories under ECOMMERCE is working
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user Clicks on Categories under ECOMMERCE from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the table is populated with entries
        Then The user Verifies each table entry details are populated
        Then The user Creates a new Category
        When The user Clicks on Categories under ECOMMERCE from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the newly created Category
        Then The user Deletes the newly created Category
        When The user Clicks on Categories under ECOMMERCE from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the newly created Category is removed from the Categories list

