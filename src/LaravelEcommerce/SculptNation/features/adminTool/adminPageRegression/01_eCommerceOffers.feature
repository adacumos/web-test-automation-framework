@QA-1430 @MD @adminTool
Feature: LE Admin Page Regression - Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Offers pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Offers" button from the sidebar menu of the Admin Tool Dashboard
        Then The "Offers" pages are loaded

    Scenario: Edit existing LE Offers and create new purchase
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Offers" button from the sidebar menu of the Admin Tool Dashboard
        And The user edits and existing Offer
        When The user creates a new test user in the Admin Tool
        And The user navigates to the New Order page
        When The user searches and adds the updated offer
        And The user adds a new shipping and billing address on the New Order page
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        And The user clicks on the Order Id link in the Orders table
        When The user clicks on the "Order Offers" tab on the Order Details page
        Then Order displays the updated Offers details

    Scenario: Revert the price changes made to the Offer
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Offers" button from the sidebar menu of the Admin Tool Dashboard
        Then Reverts the price update made to the Offer testdata

    Scenario: Create New Offer
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Offers" button from the sidebar menu of the Admin Tool Dashboard
        And The user creates a new Offer
        When The user creates a new test user in the Admin Tool
        And The user navigates to the New Order page
        Then The new Offer created is available for purchase

