@QA-2213
Feature: Klaviyo Event - Man - Clean Bulk - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Man - Clean Bulk - /survey-ga
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Clean Bulk" Program
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
