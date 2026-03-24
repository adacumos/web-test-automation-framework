@QA-2205
Feature: New Survey GA Funnel pages - Male FLE - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data
    @mobileView
    Scenario: Man FLE - Subscribe Burn Evolved Upsell, No Burn Upsell page
        Given The user Resizes the browser to "Samsung S24"
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        Then The User describes self as "I'm not happy with my body"
        And The User selects Offer and Fills outs the checkout form
        When The User "Selects" Checkout Upsell Offer
        Then The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
