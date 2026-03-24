@QA-2220 @klaviyoEvents
Feature: Klaviyo Event - Test Boost Max Funnel - Test Ripped - fbk-cpc-eco-nbb
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Test Ripped - fbk-cpc-eco-nbb
        Given Klaviyo Profile events are monitored
        And The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "twoBottle-selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
