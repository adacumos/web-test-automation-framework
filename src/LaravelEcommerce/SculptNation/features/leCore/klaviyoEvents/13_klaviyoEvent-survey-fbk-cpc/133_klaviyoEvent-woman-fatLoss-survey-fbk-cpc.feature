@QA-2222 @klaviyoEvents
Feature: Klaviyo Event - Woman - Fatloss - sp/suvery/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Fatloss - /survey/fbk-cpc
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I have 20 lbs or more fat"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
