@QA-2698 @klaviyoEvents
Feature: Klaviyo Events - LE-VS Partial Refund - Digital Purchase
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Klaviyo Event: Partial Refund - Digital Purchase
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        When The user Partially Refunds the purchased item - "Custom Plan" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
