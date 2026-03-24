@QA-2222 @klaviyoEvents
Feature: Klaviyo Event - Woman - Skinny Toned - sp/suvery/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Skinny Toned - /survey/fbk-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Skinny Toned-90Day" Program
        Then The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
