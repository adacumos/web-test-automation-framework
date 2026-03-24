@QA-2222 @klaviyoEvents
Feature: Klaviyo Event - Man - Skinny Ripped - sp/suvery/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Man Skinny Ripped - /survey/fbk-cpc
        Given The user Resizes the browser to "iPhone 15"
        And Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Skinny Ripped 90D" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
