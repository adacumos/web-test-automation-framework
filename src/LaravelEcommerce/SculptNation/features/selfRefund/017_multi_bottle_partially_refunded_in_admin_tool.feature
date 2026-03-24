@selfRefund
Feature: Mutli Bottle Self Refund - Partially Refunded In The Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Self Refund, Partially Refunded In The Admin Tool
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        Then The user searches and adds offers using the Add Offer widget
        And The user selects the shipping option in the Offers section
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        When The user clicks on the Order Id link in the Orders table
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        When The user clicks on the "Order Offers" tab on the Order Details page
        And The user clicks the Refund Order Item button on row "1"
        And The user initiates a "Partial Order" refund using the Refund Order widget
        And The user clicks the Refund Order Item button on row "4"
        And The user initiates a "Partial Order" refund using the Refund Order widget
        Given The user logs into the SculptNation account
        Then The user "creates" a self "refund" with "prior refund on this order"
