@QA-2214 @klaviyoEvents
Feature: Klaviyo Event - Burn Evolved Stack Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Purchase a Six Bottle Package and verify Klaviyo Events are logged
        Given Klaviyo Profile events are monitored
        And The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectAllFunnels"
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
