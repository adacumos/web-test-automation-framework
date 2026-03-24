@QA-2331 @leMove @clientPurchase
Feature: LE Move Landing page - /sp/move?ref=home

    Background: Load test data
        Given The user loads the VS test data

    Scenario: Move30 - Skip All Funnel Offers with Three Bottles
        Given The user navigates to V Shred Survey page
        When The user clicks "Buy Now" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The user dismisses the "Burn Evolved" offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The user dismisses the "Burn PM" offer
        And The user verifies the next funnel upsell is "CDP"
        And The user dismisses the "CDP" offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SkipAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SkipAllFunnel"
