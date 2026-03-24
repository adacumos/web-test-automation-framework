@QA-2213 @klaviyoSmoke @klaviyoEvents
Feature: Klaviyo Event - Woman - Toned Skinny - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman Toned Skinny - /survey-ga
        Given The user Resizes the browser to "Tablet"
        And Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeOffer"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
