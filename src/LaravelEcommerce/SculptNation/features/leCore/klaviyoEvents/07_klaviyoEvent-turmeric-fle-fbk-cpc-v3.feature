@QA-2218 @klaviyoEvents
Feature: Klaviyo Event - Turmeric - fle-fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Turmeric-fle-fbk-cpc-v3
        Given Klaviyo Profile events are monitored
        And The user navigates to "Turmeric with FatLoss V3" CMS Offer page
        When The user selects "One Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        When The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-SelectedFunnelsOnly"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
