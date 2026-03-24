@QA-2205
Feature: New Survey GA Funnel pages - Skinny Fat - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man Skinny Ripped -  3 Botle Burn Evolved Upsell, 3-Bottles Burn Upsell
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
