@QA-2090 @leCore @leMove @funnelPages @testBoostMax @clientPurchase
Feature: LE Move Landing page - sp/test-boost-max/fbk-cpc - Select SOME Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Three Bottle Package and Selects SOME funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Declines" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Selects Bottle Subscription Package and Selects SOME Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The User "Subscribes" the "Test Boost Max" Funnel Offer
        Then The user fills out the funnel order form
        And The User Selects "Six Bottle" of "HGH Boost" Funnel Offer
        And The User Selects "Six Bottle" of "Creatine" Funnel Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email
