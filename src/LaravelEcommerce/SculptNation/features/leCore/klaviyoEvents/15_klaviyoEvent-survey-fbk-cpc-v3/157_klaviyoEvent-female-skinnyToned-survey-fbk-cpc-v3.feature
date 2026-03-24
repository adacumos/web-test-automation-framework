@QA-2219 @klaviyoEvents
Feature: Klaviyo Event - Female - Toned Skinny - sp/suvery/fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Female Toned Skinny - /survey/fbk-cpc-v3
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Female"
        When A "Female" client purchases the "Skinny Toned-90Day" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
