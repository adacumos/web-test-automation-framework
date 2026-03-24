@QA-1432 @MD @adminTool
Feature: LE Admin Page Regression - Finance > Discounts
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Finance > Discounts pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Discounts" button from the sidebar menu of the Admin Tool Dashboard
        Then The Finance "Discounts" pages are loaded

    Scenario: Edit an existing Discount and create new purchase
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Discounts" button from the sidebar menu of the Admin Tool Dashboard
        And The user edits an existing Discount
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        And The user searches an offer and apply the edited Discount resource
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        And The user clicks on the Order Id link in the Orders table
        When The user clicks on the "Order Offers" tab on the Order Details page
        Then The Discounted Order Offer details is displayed

    Scenario: Restore default test data
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Discounts" button from the sidebar menu of the Admin Tool Dashboard
        Then Reverts the changes made to Discount test data

    Scenario: Create New Percentage Discounts
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Discounts" button from the sidebar menu of the Admin Tool Dashboard
        And Creates a new Discount
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        And The user searches an offer and apply the new Discount

    Scenario: Delete New Discount Created
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Discounts" button from the sidebar menu of the Admin Tool Dashboard
        Then Delete New Test Discount Created
