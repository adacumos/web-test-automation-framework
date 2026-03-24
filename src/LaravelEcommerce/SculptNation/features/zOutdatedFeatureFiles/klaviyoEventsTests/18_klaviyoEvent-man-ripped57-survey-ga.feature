@QA-2213
Feature: Klaviyo Event - Man - Ripped 90D $57 - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Man - Ripped 90Days $57 - /survey-ga
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Skinny Ripped 90D" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
