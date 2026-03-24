@QA-1948 @QA-2050 @leCore @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - VS Survey - Men - Ripped in 90 Days for $57.00
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped in 90 Days for $57.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"
