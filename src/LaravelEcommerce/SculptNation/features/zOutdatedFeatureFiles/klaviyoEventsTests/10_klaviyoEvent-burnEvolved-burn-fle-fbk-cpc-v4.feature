@QA-2221
Feature: Klaviyo Event - Burn Evolved - Fatloss Bundle sp/burn-fle/burn-fle-fbk-cpc-v4
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Burn Evolved - sp/burn-fle/burn-fle-fbk-cpc-v4
        Given Klaviyo Profile events are monitored
        And The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "threeBottle-SelectedFunnelsOnly"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
