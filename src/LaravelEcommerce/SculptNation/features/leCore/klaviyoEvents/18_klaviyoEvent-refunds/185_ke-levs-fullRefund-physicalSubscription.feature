@QA-2698 @klaviyoEvents
Feature: Klaviyo Events - LE-VS Full Refund - Physical Subscription
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    @mobileView
    Scenario: Klaviyo Event: Full Refund Physical Subscription
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        When The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The User "Subscribes" the "Burn PM" Funnel Offer
        Then The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectAllFunnels"
        When The password is reset to default value
        When The user Fully Refunds a purchased item - "Burn Evolved Monthly Subscription" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
