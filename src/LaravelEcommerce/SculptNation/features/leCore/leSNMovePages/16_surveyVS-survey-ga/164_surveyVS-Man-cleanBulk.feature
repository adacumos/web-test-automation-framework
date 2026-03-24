@QA-1454 @leMove @funnelPages @vsSurvey @clientPurchase @uat
Feature: LE Move Landing page - survey-ga - Clean Bulk
    Background: Load test data
        Given The user loads the LE test data

    @leCore @levsSmoke
    Scenario: Man VS Survey - Clean Bulk Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 3B Upsell" Funnel Offer
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email

    Scenario: Man VS Survey - Clean Bulk Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
