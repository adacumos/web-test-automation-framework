@Prodution @green @sn-products-green
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Skips ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Six Bottle Package and Skips All Funnel Offers
        And The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
