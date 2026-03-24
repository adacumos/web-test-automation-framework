@QA-1600 @MD @adminTool
Feature: LE Admin menu - Gtins
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu Gtins are working and creates a new Gtins and Product
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Gtins" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the table is populated with entries
        Then The user Verifies each table entry details are populated
        When The user clicks on the "Products" button from the sidebar menu of the Admin Tool Dashboard
        When The user creates a new Product
        When The user clicks on the "Gtins" button from the sidebar menu of the Admin Tool Dashboard
        When The user creates a new Gtin
        Then The user Verifies the newly created Gtin
        When The user clicks on the "Gtins" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Deletes the New "Gtin" created
        When The user clicks on the "Gtins" button from the sidebar menu of the Admin Tool Dashboard
        Then The user verifies the "Gtin" created in previous steps no longer exist




