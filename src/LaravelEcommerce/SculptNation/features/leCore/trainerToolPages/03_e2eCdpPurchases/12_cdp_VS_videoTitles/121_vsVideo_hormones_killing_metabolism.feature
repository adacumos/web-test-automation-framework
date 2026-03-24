@QA-2541 @QA-2543 @cdp @levsSmoke
Feature: VS Homepage - Video - 3 Hormones Killing Metabolism Sales Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Homepage Video - Female FLE - Burn Evolved + CDP Bundle Offer
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details

    @mobileView
    Scenario: VS Homepage Video - Female FLE - CDP Bumper + VSU Upgrade page
        Given The user Resizes the browser to "iPhone XR"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: VS Homepage Video - Female FLE - CDP Funnel Offer
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form

    # # @mobileView
    Scenario: VS Homepage Video - Female FLE - Skip CDP Offer
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Hormone Killing Metabolism"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
