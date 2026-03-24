@QA-2223 @klaviyoEvents
Feature: Klaviyo Event - Male - Clean Bulk - sp/suvery/aka1
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Male Clean Bulk - /survey/aka1#
        Given Klaviyo Profile events are monitored
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Clean Bulk" Program
        And The User "Declines" the CDP Bumper Offer and submits the order
        When The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
