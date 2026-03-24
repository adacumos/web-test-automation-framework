@QA-1454 @leCore @beta
Feature: LE Move Landing page - VS Survey fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data
    @focus
    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Get Toned - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 3B Upsell" Funnel Offer
        When The user verifies the next funnel upsell is "Burn PM"
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
