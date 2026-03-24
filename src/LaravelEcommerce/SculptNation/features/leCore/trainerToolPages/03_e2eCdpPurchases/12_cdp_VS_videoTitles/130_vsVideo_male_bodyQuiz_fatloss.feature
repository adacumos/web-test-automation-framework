@QA-2541 @QA-2546 @QA-2575 @cdp @vidalytics @klaviyoSmoke @levsSmoke
Feature: VS Homepage - Male Body Quiz - Get Diet and Training Specific to Body Type
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Homepage Video - Male Body Quiz - Fat Loss Extreme - CDP Bumper
        Given Klaviyo Profile events are monitored
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Get Diet & Training"
        When The user starts V Shred survey for "Man"
        When The Male user describes self as "I'm not happy with my body"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 6B @50%OFF" Funnel Offer
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
