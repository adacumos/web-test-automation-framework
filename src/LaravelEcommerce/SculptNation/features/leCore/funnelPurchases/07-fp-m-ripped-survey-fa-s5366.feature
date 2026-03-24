@QA-2205
Feature: New Survey GA Funnel pages - Male Ripped - sp/survey/survey-ga?show=5366
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man Ripped -  Decline Burn Evolved Upsell, 1-Bottle Burn Upsell
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        Then The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
