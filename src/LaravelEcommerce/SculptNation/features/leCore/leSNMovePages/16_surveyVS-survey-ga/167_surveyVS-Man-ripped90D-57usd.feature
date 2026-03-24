@QA-1454 @surveyGa @leMove @funnelPages @vsSurvey @clientPurchase
Feature: LE Move Landing page - survey-ga - Ripped Skinny
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped Skinny for $57.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipSomeFunnels"

    @beta @leCore @levsSmoke @uat
    Scenario: Male VS Survey - "Ripped Skinny for 90 Days for $57.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
