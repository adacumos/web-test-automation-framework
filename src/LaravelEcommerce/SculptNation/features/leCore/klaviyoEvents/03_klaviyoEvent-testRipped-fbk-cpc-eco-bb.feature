@QA-2215 @klaviyoEvents
Feature: Klaviyo Event - Test Boost Max Funnel - Test Ripped - fbk-cpc-eco-bb
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Test Ripped - fbk-cpc-eco-bb
        Given Klaviyo Profile events are monitored
        And The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
