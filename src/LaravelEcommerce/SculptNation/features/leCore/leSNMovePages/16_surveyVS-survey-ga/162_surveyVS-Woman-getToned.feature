@QA-1454 @surveyGa @leMove @funnelPages @vsSurvey @clientPurchase @uat
Feature: LE Move Landing page - survey-ga - Toned
    Background: Load test data
        Given The user loads the LE test data

    @beta @leCore @levsSmoke
    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Get Toned Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"

