@QA-2575 @klaviyoSmoke
Feature: Klaviyo Events - VS Homepage - Video Container - 3 Hormones Killing Metabolism Sales Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: KlaviyoEvent - VS Video: Burn Evolved + CDP Bundle Offer
        Given Klaviyo Profile events are monitored
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        When The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
