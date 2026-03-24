@QA-2942 @btShipping
Feature: Verify Shipping Fee is logged in Braintree
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Funnel Purchase - check BT Shipping Fee
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Muscle Building Strength" section of the landing page
        Then The user clicks "HGH Boost" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        When The User Selects "One Bottle" of "HGH Boost" Funnel Offer
        When The user clicks the Proceed to Checkout button
        Then The user fills out the funnel order form
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        When The User Selects "One Bottle" of "Pre Workout" Funnel Offer
        And The User "Declines" the "BurnPM Coupon" Funnel Offer
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user views the details of an Order Item
        Then The user collects the Transaction Reference from the Payments page and settles the payment for the order
        When The user validates Order detail values with related resources
        Then The user logs out of Admin Tool
        When The user login to BrainTree
        Then The user searches for transaction reference number
        Then Verifies BT Transaction Order Details
