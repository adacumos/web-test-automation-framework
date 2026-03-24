@QA-2942 @btShipping
Feature: Verify Shipping Fee is logged in Braintree
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE Move Landing page - Burn Evolved Fatloss Package
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user views the details of an Order Item
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        When The user validates Order detail values with related resources
        Then The user logs out of Admin Tool
        When The user login to BrainTree
        Then The user searches for transaction reference number
        Then Verifies BT Transaction Order Details
