@QA-2222 @klaviyoEvents
Feature: Klaviyo Event - Man - Fat Loss Extreme - sp/suvery/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Man Fat Loss Extreme - /survey/fbk-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Fat Loss Extreme for Him" Program
        And The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn Upgrade"
        When The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
