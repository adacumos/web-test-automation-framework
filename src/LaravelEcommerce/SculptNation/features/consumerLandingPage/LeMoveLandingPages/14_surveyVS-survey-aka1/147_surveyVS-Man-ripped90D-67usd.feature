@QA-1957 @QA-2051 @lePageMove @leLong
Feature: LE Move Landing page - VS Survey - Men - Ripped in 90 Days for $67.00
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - Select All Funnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        Then The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
