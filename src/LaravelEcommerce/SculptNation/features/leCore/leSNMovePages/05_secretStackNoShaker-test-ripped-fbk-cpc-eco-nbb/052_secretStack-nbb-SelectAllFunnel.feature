@QA-1455 @leCore @leMove @funnelPages @fatLoss @clientPurchase
Feature: LE Move Landing page - Secret Stack - NO Shaker - Select All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Two Bottle Package and Select ALL funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
