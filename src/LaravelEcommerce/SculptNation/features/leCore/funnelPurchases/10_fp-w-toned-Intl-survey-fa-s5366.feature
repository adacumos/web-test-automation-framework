@QA-2205
Feature: New Survey GA Funnel pages - Female Toned in 90D - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman Toned - 6-Bottle Burn Evolved, 3-Bottle Burn Upsell, International
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
