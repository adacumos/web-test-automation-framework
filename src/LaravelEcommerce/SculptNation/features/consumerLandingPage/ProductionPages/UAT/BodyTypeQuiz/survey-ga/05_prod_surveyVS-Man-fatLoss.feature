@newUAT
Feature: LE Move Landing page - survey-ga - Fat Loss for Him
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man VS Survey - Fat Loss for Him Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        Then The User describes self as "I'm not happy with my body"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
