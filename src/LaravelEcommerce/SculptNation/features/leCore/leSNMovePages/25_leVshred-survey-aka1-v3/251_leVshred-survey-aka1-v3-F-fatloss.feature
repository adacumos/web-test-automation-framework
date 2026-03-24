@QA-2336 @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - vs ./survey-aka1-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS survey-aka1-v3 - FLE Her Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Fatloss Extreme for Her - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
