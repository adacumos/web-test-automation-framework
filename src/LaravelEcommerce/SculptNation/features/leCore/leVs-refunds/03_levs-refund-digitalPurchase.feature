@QA-2581 @QA-2582 @refunds
Feature: Refund transaction - LE-VS Purchases
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Full Refund Order - Digital Product
        Given The user Resizes the browser to "iPad 10"
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
        Given The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Sales" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The password is reset to default value
        When The user Fully Refunds a purchased item - "Custom Plan" in LE Admin
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The client user verifies order item status is "refunded"
