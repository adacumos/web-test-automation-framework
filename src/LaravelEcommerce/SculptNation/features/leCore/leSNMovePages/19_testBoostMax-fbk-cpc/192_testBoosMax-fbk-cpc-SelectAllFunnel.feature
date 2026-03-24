@QA-2090 @leCore @leMove @funnelPages @testBoostMax @clientPurchase
Feature: LE Move Landing page - sp/test-boost-max/fbk-cpc - Select ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Six Bottle Package and Selects ALL funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Declines" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Selects Bottle Subscription Package and Selects All Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The User "Subscribes" the "Test Boost Max" Funnel Offer
        Then The user fills out the funnel order form
        When The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User Selects "One Bottle" of "Creatine" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email
