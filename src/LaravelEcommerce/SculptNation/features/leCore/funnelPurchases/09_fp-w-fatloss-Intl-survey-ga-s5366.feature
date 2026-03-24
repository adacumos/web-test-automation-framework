@QA-2205
Feature: New Survey GA Funnel pages - Female Fatloss - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Woman FLE - Subscribe Burn Evolved, No Burn Upsell page, International
        Given The user Resizes the browser to "iPhone12 pro max"
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"

    Scenario: Woman FLE - 1 Bottle Burn Evolved, Decline 3-Bottle Burn Upsell, International
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        Then The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
