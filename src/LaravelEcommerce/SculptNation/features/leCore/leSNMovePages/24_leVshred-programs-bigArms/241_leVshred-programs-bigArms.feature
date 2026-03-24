@QA-2340 @leMove @funnelPages @bigArms @clientPurchase
Feature: LE Move Landing page - /sp/big-arms-programs?show=1717
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Big Arms Program - Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Click Here to Purchase" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Big Arms Program Program - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Click Here to Purchase" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        When The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"

    Scenario: Big Arms Program Program - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Click Here to Purchase" button
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        When The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
