@leCore @leMove @funnelPages @fatLoss @clientPurchase
Feature: Funnel Testing for Fat Loss Extreme for Her $57 Bundle Select Some Funnels
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and selects some funnel upsells
        Given The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The user clicks the "Subscribe Now" button on the "first" upsell page
        And The user verifies the next funnel upsell is "Burn PM"
        And The user dismisses the "Burn PM" offer
        And The user verifies the next funnel upsell is "VSU"
        And The user dismisses the "VSU" offer
        And The user dismisses the "CDP" offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
