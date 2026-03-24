@QA-2695 @klaviyoEvents
Feature: Klaviyo Events - LE-VS Full Refund - Digital Purchase
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    @mobileView
    Scenario: Klaviyo Event: Full Refund - Digital Purchase
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        When The user Fully Refunds a purchased item - "Custom Plan" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
