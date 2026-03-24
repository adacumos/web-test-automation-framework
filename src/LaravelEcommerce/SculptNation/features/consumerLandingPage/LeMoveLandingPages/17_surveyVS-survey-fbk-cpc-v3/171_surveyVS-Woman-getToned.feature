@QA-1454
Feature: LE Move Landing page - VS Survey - Woman - Toned
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Get Toned - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        Then The user fills out the shipping order form
        When The user verifies the next funnel upsell is "Burn PM"
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
