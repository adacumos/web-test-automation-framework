@QA-2581 @QA-2624 @refunds
Feature: Partial Refund transaction - LE-VS Physical Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Partially Refund a Physical Order Item
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The password is reset to default value
        When The user Partially Refunds the purchased item - "Burn Evolved" in LE Admin
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The client user verifies order item status is "partially_refunded"
