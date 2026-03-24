@QA-1452 @leCore @leMove @funnelPages @testBoostRipped @clientPurchase
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Six Bottle Package and Select some funnel Offers
        Given The user navigates to "TestBoost-Ripped90F" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The User Selects "Six Bottle" of "HGH Boost" Funnel Offer
        And The User Selects "Three Bottle" of "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
