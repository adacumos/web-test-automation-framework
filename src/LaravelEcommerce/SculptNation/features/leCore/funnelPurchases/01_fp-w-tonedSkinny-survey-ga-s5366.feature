@QA-2205 @surveyGA
Feature: New Survey GA Funnel pages - Toned Skinny - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Woman Toned Skinny - 1 Bottle Burn Evolved, 3-Bottles Burn Upsell
        Given The user Resizes the browser to "iPhone XR"
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeOffer"

    Scenario: Woman Toned Skinny - Decline Burn Evolved Upsell, Decline 1-Bottle Burn Upsell
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        When The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "declineAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "declineAllFunnel"
