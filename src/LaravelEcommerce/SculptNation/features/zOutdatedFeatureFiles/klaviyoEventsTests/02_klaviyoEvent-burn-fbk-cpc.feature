@QA-2214
Feature: Klaviyo Event - Burn Evolved Stack Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Purchase a Six Bottle Package and verify Klaviyo Events are logged
        Given Klaviyo Profile events are monitored
        And The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
