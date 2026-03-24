@QA-1637 @MD @adminTool
Feature: LE Admin Page Regression - Finance > Orders
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Finance > Orders pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Orders" menu from the Admin Tool Dashboard
        Then The Finance "Orders" pages are loaded

    Scenario: Create New Order and Validate Order Details matches linked Resources values
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        And The user searches and adds an offer using the Add Offer widget
        And The user selects the shipping option in the Offers section
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        When The user clicks on the Order Id link in the Orders table
        And The user validates Order detail values with related resources
