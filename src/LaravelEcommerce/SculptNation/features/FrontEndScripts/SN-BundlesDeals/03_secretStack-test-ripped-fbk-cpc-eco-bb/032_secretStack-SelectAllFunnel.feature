@QA-1450 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - Selects All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Four Bottle Package and purchase ALL Funnel Offer
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "fourBottle-selectAllFunnels"
