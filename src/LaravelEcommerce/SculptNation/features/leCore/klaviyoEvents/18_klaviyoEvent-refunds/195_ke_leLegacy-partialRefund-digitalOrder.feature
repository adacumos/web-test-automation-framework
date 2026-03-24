@QA-2701 @klaviyoEvents
Feature: Klaviyo Events - LE Legacy Partial Refund - Digital Orders
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Partial Refund - LE Legacy Digital Purchase
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        When The User Selects "Six Bottle" of "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user searches the "dynamic" test email
        When The user Partially Refunds the purchased item - "Custom Diet Plan" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
