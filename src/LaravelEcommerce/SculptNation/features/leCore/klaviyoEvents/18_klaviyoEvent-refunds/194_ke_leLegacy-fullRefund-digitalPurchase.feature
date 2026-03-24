@QA-2701 @klaviyoEvents
Feature: Klaviyo Events - LE Legacy Refund - Digital Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE Legacy Digital Purchase Refund
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        When The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user searches the "dynamic" test email
        When The user Fully Refunds a purchased item - "Creatine" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo

