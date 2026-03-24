@QA-2224 @klaviyoEvents
Feature: Klaviyo Event - Special Offer - New Year Packages - sp/newyears/special-offer-eco-fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Ultimate Burn Offer Offer
        Given Klaviyo Profile events are monitored
        And The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "ultimateBurn-selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
