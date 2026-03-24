@QA-1948 @QA-2055 @leCore @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - VS Survey - Men - CleanBulk $87
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - Clean Bulk Program for $87.00 - Skip ALL funnel offer
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Male VS Survey - Clean Bulk Program for $87.00 - Select Some funnel offer
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        When The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
