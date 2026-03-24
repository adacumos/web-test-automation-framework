@QA-2213
Feature: Klaviyo Event - Woman - Toned Skinny - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Toned Skinny - /survey-ga
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Skinny Toned-90Day" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user fills out the shipping order form
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeOffer"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
