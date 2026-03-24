@QA-2225 @klaviyoEvents
Feature: Klaviyo Event - Woman - Toned - sp/suvery/fbk-cpc-v2
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Toned - /survey/fbk-cpc-v2
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
