@QA-1948 @QA-2055 @leCore @funnelPages @vsSurvey @clientPurchase @beta
Feature: LE Move Landing page - VS Survey fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - Clean Bulk Program for $87.00 - Skip ALL funnel offer
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Male VS Survey - Clean Bulk Program for $87.00 - Select Some funnel offer
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
