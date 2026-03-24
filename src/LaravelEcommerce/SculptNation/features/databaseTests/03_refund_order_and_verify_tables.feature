@smoke @MD @database
Feature: Refund order with shipping and verify database tables
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify the data on Payments, Refunds, Orders, Shipping and Subscriptions tables exists and correct when refunding an order
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
        And The user initiates a "Entire Order with Shipping" refund using the Refund Order widget
        When The user clicks on the "Details" tab on the Order Details page
        And The user verifies the refunded order on the Orders table
        And The user verifies the cancelled subscription on the Subscriptions table
        And The user verifies the refunded payment on the Payments table
        And The user verifies the created refund on the Refunds table
        And The user verifies the cancelled shipment on the Shipments table
        And The user verifies the refunded invoice on the Invoices table

