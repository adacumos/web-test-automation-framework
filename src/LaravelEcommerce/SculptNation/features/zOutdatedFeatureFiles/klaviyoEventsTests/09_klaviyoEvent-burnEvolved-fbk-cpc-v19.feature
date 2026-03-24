@QA-2226
Feature: Klaviyo Event - Burn Evolved - Fatloss Bundle survey/burn-evolved-fbk-cpc-v19
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Events - Burn Evolved - survey/burn-evolved-fbk-cpc-v19
        Given Klaviyo Profile events are monitored
        And The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User "Upgrades" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-SelectedFunnelsOnly"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
