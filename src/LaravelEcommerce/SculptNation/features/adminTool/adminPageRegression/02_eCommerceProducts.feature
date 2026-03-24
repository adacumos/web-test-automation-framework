@QA-1431 @MD @adminTool
Feature: LE Admin Page Regression - Products
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Products pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Products" button from the sidebar menu of the Admin Tool Dashboard
        Then The "Products" pages are loaded

    Scenario: Edit existing LE Product
        Given The user logs into the Admin Tool using an account with "admin" credentials
        And The user clicks on the "Product" button from the sidebar menu of the Admin Tool Dashboard
        When The user edits the "Name" of an existing Product
        Then The updated Product details is reflected in related tables
    Scenario: Revert changes made to the Product test data
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Products" button from the sidebar menu of the Admin Tool Dashboard
        Then Restores default values of the Products test date

    Scenario: Create New Product
        Given The user logs into the Admin Tool using an account with "admin" credentials
        And The user clicks on the "Products" button from the sidebar menu of the Admin Tool Dashboard
        When The user creates a new Product
        Then The "Product" table can be attached to "Offers" resource
    Scenario: Delete new Product created
        Given The user logs into the Admin Tool using an account with "admin" credentials
        And The user clicks on the "Products" button from the sidebar menu of the Admin Tool Dashboard
        Then Delete New Test Product Created
