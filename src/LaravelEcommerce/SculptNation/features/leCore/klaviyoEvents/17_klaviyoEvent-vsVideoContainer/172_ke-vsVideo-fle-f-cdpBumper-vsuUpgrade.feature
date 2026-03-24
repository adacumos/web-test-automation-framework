@QA-2575 @klaviyoEvents
Feature: Klaviyo Events - VS Homepage - Video Container - 3 Hormones Killing Metabolism
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: KlaviyoEvent - VS Video: CDP Bumper + VSU Upgrade page
        Given Klaviyo Profile events are monitored
        And The user Resizes the browser to "iPhone XR"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then Verifies the video loads properly
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "VSU Upgrade" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        # Then The User verifies the Order Summary - "selectCdpBumper"
        # And Verifies CDP Questionnaire button is "Visible"
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
