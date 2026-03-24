@QA-1944 @leCore @leMove @funnelPages @testBoostMax @clientPurchase
Feature: LE Move Landing page - Test Boost Max BOGO - Select All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Select All Funnel Offers
        Given The user navigates to "TestBoost Max BOGO" CMS Offer page
        When The user clicks "Add to Cart" from the offer page
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
