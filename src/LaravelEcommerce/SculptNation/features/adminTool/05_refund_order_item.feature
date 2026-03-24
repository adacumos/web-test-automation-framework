@QA-601 @MD @adminTool @betaRefunds
Feature: Refund Order Item
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Refund Order Item
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
        When The user clicks on the Order Id link in the Orders table
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        And The user sees the reference number on the Shipments page and sends the shipment for the order
        When The user clicks on the "Order Offers" tab on the Order Details page
        And The user clicks the Refund Order Item button on row "1"
        And The user initiates a "Partial Order" refund using the Refund Order widget
        When The user clicks on the "Details" tab on the Order Details page
        Then The user validates the "Refunded Item" data on the Order Details page
        When The user clicks on the "Order Offers" tab on the Order Details page
        Then The user validates the "Refunded Item" Order data on row "1" of the Order Offers page
        And The user validates the "Refunded Item" Order data on row "2" of the Order Offers page
        And The user validates the "Refunded Item" Order data on row "3" of the Order Offers page
        When The user clicks on the "Invoices" tab on the Order Details page
        Then The user validates the Order data on the Invoices page
        When The user clicks on the "Payments" tab on the Order Details page
        Then The user validates the "Refunded Item" Order data on the Payments page
        When The user clicks on the "Shipments" tab on the Order Details page
        Then The user validates the Order data on the Shipments page
        Then The user verifies the shipment status is "Canceled" in Stord
