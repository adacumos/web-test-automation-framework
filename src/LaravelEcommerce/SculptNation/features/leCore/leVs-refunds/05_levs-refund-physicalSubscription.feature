@QA-2581 @QA-2633 @refunds
Feature: Refund transaction - LE-VS Physical Subscription Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Refund Physical Subscription
        Given The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
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
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The client user verifies order item status is "refunded"
