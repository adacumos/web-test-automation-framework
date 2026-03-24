@QA-1978 @QA-2052 @leCore @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - VS Survey - Female - Toned Skinny $57
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Female VS Survey - Toned Skinny - Skip All Funnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When The Female user describes self as "I'm skinny. I need to add toned muscle"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Female VS Survey - Toned Skinny - Select Some Funnels
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When The Female user describes self as "I'm skinny. I need to add toned muscle"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User "Declines" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
