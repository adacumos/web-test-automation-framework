@QA-1612 @MD @adminTool
Feature: LE Admin Page Regression - Shipping > Categories
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Shipping > Categories pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Shipping-Categories" menu from the Admin Tool Dashboard
        Then The Shipping "Categories" pages are loaded
        And The user captures the "Shipping-Categories" resource details

    Scenario: Create New Order and Validate Shipping Category used
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        And The user searches and adds an offer using the Add Offer widget
        And The user selects the saved shipping option
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        When The user clicks on the Order Id link in the Orders table
        Then The selected Shipping category is displayed
