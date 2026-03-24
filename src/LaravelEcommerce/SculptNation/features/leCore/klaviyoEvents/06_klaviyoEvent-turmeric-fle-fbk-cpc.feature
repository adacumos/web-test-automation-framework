@QA-2216 @klaviyoEvents
Feature: Klaviyo Event - Turmeric - fle-fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Turmeric-fle-fbk-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        When The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-SelectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
