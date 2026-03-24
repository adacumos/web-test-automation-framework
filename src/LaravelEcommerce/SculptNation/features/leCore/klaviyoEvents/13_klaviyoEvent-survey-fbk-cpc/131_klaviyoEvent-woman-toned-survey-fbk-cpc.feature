@QA-2222 @klaviyoEvents
Feature: Klaviyo Event - Woman - Toned - sp/suvery/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Toned - /survey/fbk-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The user verifies the next funnel upsell is "Burn PM"
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
