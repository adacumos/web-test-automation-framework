@QA-1957 @QA-2052 @leCore @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - VS Survey - Woman - Toned Skinny
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Get Toned Skinny Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Get Toned Skinny Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The user fills out the shipping order form
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"

