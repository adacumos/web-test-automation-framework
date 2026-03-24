@QA-2213 @klaviyoSmoke @klaviyoEvents @levsSmoke
Feature: Klaviyo Event - Woman - Toned - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Toned - /survey-ga
        Given Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
