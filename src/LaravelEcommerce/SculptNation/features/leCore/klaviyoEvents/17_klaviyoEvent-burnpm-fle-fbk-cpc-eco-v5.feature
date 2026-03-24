@QA-2211
Feature: Platinum Evolved Stack - Klaviyo Event - Ordered Product
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event Ordered Product - burnpm-fle-fbk-cpc-eco-v5
        Given Klaviyo Profile events are monitored
        And The user navigates to "Burn-PM" CMS Offer page
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        Then The User "Upgrades" the "Turmeric Black" Funnel Offer
        Then The User "Upgrades" the "Enzymes" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectedFunnelsOnly"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
