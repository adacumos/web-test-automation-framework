@QA-2217 @klaviyoEvents
Feature: Klaviyo Event - Test Boost Max Funnel - Test Ripped - test-ripped-ggl
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Test Ripped - ggl-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to "TestBoost-Ripped90F" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
