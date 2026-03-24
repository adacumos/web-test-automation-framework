@QA-2213 @klaviyoSmoke @klaviyoEvents @mobileView @levsSmoke
Feature: Klaviyo Event - Woman - FatLoss Extreme - sp/suvery/survey-ga
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Klaviyo Event - Woman FatLoss Extreme - /survey-ga
        Given The user Resizes the browser to "iPhone XR"
        And Klaviyo Profile events are monitored
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
