@QA-3013 @QA-2942 @btShipping
Feature: Verify Shipping Fee is logged in Braintree
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Funnel Purchase - check BT Shipping Fee
        Given The user navigates to a LE-VS Checkout form
        Then The user fills out the survey order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The user clears out the session data
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user views the details of an Order Item
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        When The user validates Order detail values with related resources
        Then The user logs out of Admin Tool
        When The user login to BrainTree
        Then The user searches for transaction reference number
        Then Verifies BT Transaction Order Details
