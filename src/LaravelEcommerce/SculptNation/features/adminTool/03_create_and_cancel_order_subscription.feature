@beta @smoke @QA-588 @MD
Feature: Create and Cancel Order Subscription via Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create and Cancel Order Subscription
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
        Then The user sees the offer and the total amount in the Orders table
        When The user clicks the "Subscriptions" tab on the Orders section
        Then The user validates the data on the Subscriptions page
        When The user clicks the "Orders" tab on the Orders section
        And The user clicks on the Order Id link in the Orders table
        Then The user validates the "Created" data on the Order Details page
        When The user clicks on the "Order Offers" tab on the Order Details page
        Then The user validates the "Created" Order data on row "1" of the Order Offers page
        And The user validates the "Created" Order data on row "2" of the Order Offers page
        And The user validates the "Created" Order data on row "3" of the Order Offers page
        When The user clicks on the "Invoices" tab on the Order Details page
        Then The user validates the Order data on the Invoices page
        When The user clicks on the "Payments" tab on the Order Details page
        Then The user validates the "Created" Order data on the Payments page
        When The user navigates "back"
        And The user clicks the "Subscriptions" tab on the Orders section
        Then The user cancels the subscription

