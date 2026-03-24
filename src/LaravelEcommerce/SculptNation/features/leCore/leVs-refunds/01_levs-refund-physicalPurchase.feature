@QA-2581 @QA-2583 @refunds
Feature: Full Refund transaction - LE-VS Physical Purchase
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Full Refund Order - Physical Product
        Given The user Resizes the browser to "iPhone XR"
        When The user navigates to V Shred Survey page
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        When The password is reset to default value
        When The user Fully Refunds a purchased item - "BURN PM" in LE Admin
        Then The user logs out of Admin Tool
        Then The user Resizes the browser to "iPhone XR"
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The client user verifies order item status is "refunded"
# When The user logs into the Vshred Admin Tool as "Sales" user
# Then Verifies the refunded order item is sync in VS Admin

