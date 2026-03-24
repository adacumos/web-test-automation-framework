@QA-2696 @klaviyoEvents
Feature: Klaviyo Events - LE-VS Full Physical Refund
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    @mobileView
    Scenario: Klaviyo Event: LE-VS Full Physical Refund
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
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        When The user Fully Refunds a purchased item - "BURN PM" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
