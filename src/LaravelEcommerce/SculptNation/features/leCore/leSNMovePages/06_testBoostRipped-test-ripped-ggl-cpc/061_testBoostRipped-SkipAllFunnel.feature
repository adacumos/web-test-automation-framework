@QA-1452 @leCore @leMove @funnelPages @testBoostRipped @clientPurchase
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Skips ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "One Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    @mobileView
    Scenario: Selects Six Bottle Package and Skips All Funnel Offers
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Selects Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
