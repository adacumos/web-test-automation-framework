@QA-1455 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - NO Shaker - Select All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Two Bottle Package and Select ALL funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user verifies the checkout form type and makes purchase
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The user clears out the session data
        When The Orders are sync in the Admin Tool - "twoBottle-selectAllFunnels"
