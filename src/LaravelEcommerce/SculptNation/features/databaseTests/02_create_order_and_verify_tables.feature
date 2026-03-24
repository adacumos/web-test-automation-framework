@smoke @MD @database
Feature: Create an order and verify database tables
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify the data on Users, Orders, Payments and Subscriptions tables exists and correct when creating an order
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        When The user adds a new shipping and billing address on the New Order page
        And The user searches and adds an offer using the Add Offer widget
        And The user selects the shipping option in the Offers section
        Then The user processes the payment using a "valid" credit card
        And The user verifies the created user on the Users table
        And The user verifies the created order on the Orders table
        And The user verifies the created payment on the Payments table
        And The user verifies the created invoice on the Invoices table
        And The user verifies the created shipment on the Shipments table
