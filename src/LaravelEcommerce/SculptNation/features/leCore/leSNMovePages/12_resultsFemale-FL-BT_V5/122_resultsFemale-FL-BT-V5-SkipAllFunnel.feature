@QA-1844 @leCore @leMove @funnelPages @fatLoss @clientPurchase
Feature: Funnel Testing for Fat Loss Extreme for Her $57 Bundle Skips All Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and declines all funnel upsells
        Given The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The user dismisses the "Burn Evolved" offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The user dismisses the "Burn PM" offer
        And The user verifies the next funnel upsell is "VSU"
        And The user dismisses the "VSU" offer
        And The user dismisses the "Greens" offer
        # When The user logs into the Vshred Admin Tool as "Admin" user
        # Then The client purchases are sync in VS admin tool - "skipAllFunnels"
        Then The user checks "Order Confirmation" email
