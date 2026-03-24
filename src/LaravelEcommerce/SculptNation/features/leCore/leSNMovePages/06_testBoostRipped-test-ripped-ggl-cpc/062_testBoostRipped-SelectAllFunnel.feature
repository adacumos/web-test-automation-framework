@QA-1452 @leCore @leMove @funnelPages @testBoostRipped @clientPurchase
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Select ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Three Bottle Package and Select ALL funnel Offers
        Given The user navigates to "TestBoost-Ripped90F" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
