@QA-1450 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - 2 Bottle Package and Select Some Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Two Bottle Package and Select some of the Funnel Offers
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        Then The User Selects "Six Bottle" of "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "twoBottle-selectFunnels"

    Scenario: Selects Four Bottle Package and purchase CDP Funnel Offer
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        When The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "fourBottle-selectFunnels"
