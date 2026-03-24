@QA-2336 @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - vs ./survey-aka1-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman LE-VS survey-aka1-v3 - Toned Skinny- Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
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
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"

    Scenario: Woman LE-VS survey-aka1-v3 Survey - Toned Skinny - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The user fills out the shipping order form
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
