@QA-2223 @klaviyoEvents
Feature: Klaviyo Event - Female - Toned 90D - sp/suvery/aka1
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Female Toned in 90Days- /survey/aka1#
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
