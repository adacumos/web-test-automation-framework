@QA-2227
Feature: Klaviyo Event - Test Boost Max Funnel - Test Ripped - fbk-cpc-eco
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Test Ripped - fbk-cpc-eco
        Given Klaviyo Profile events are monitored
        And The user navigates to "TestBoost Max BOGO" CMS Offer page
        When The user clicks "Add to Cart" from the offer page
        Then The user fills out the funnel order form
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        When The User Selects "Three Bottle" of "Creatine" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The Orders are sync in the Admin Tool - "selectedFunnelsOnly"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
