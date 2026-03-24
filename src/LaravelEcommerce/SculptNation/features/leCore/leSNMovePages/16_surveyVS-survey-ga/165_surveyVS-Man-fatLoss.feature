@QA-1454 @surveyGa @leMove @funnelPages @vsSurvey @clientPurchase @uat
Feature: LE Move Landing page - survey-ga - Fat Loss for Him
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man VS Survey - Fat Loss for Him Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        Then The User describes self as "I'm not happy with my body"
        Then The User selects Offer and Fills outs the checkout form
        When The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email

    @hotfixes @leCore @levsSmoke
    Scenario: Man VS Survey - Fat Loss for Him Selects All Funnel Offers
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        Then The User describes self as "I'm not happy with my body"
        Then The User selects Offer and Fills outs the checkout form
        When The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
