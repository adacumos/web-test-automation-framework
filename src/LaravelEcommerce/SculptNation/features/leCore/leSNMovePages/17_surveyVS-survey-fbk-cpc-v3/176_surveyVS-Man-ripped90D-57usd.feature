@QA-1948 @QA-2050 @leCore @funnelPages @vsSurvey @clientPurchase @beta
Feature: LE Move Landing page - VS Survey fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Skinny Ripped in 90 Days for $57.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Male VS Survey - "Skinny Ripped in 90 Days for $57.00" - selectSomeFunnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" Checkout Upsell Offer
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
