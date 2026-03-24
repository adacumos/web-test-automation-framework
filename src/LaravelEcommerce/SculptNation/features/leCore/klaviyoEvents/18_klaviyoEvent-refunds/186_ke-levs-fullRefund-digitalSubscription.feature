@QA-2581 @QA-2634 @refunds
Feature: Klaviyo Events - LE-VS Full Refund - Digital Subscription
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Refund Digital Subscription
        When The user navigates to the Custom Coaching Plans page
        And The user selects "Monthly Custom Diet" Subscription Plan
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        When The User "Upgrades" the "Burn Flash Sale" Funnel Offer
        When The User "Upgrades" the "Burn Accelerator" Funnel Offer
        When The User "Upgrades" the "VSU Reboot" Funnel Offer
        When The User "Upgrades" the "Greens Bundle" Funnel Offer
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "cdpSilver"
        When The password is reset to default value
        When The user Fully Refunds a purchased item - "Silver CDP Subscription" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
