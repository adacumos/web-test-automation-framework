@QA-1454 @surveyGa @leMove @funnelPages @vsSurvey @uat
Feature: LE Move Landing page - survey-ga - Toned Skinny
    Background: Load test data
        Given The user loads the LE test data

    @hotfixes
    Scenario: Woman VS Survey - Get Skinny Toned Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeOffer"

    @beta @leCore @levsSmoke
    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"
