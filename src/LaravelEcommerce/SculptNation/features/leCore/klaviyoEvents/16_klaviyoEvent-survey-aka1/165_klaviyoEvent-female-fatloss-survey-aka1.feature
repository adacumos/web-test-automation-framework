@QA-2223 @klaviyoEvents @levsSmoke
Feature: Klaviyo Event - Female - Fat Loss - sp/suvery/aka1
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Female Fat Loss - /survey/aka1#
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Fat Loss Extreme for Her" Program
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
