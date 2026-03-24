@QA-2219 @klaviyoEvents
Feature: Klaviyo Event - Female - Fat Loss for Her - sp/suvery/fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Female Fatloss for Her - /survey/fbk-cpc-v3
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
