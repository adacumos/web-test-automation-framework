@QA-1450 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - Skips All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Two Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        When The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The Orders are sync in the Admin Tool - "twoBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email

    Scenario: Selects Four Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The Orders are sync in the Admin Tool - "fourBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email
