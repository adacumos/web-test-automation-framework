@QA-2541 @QA-2544 @vidalytics
Feature: VS Homepage - Video - Shedding Fat While Having Fun
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Homepage Video - Male FLE
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Shedding Fat"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details

    @mobileView
    Scenario: VS Homepage Video - Male FLE - Select CDP Bumper Offer
        Given The user Resizes the browser to "iPhone 15"
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Shedding Fat"
        Then The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        When The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 6B @50%OFF" Funnel Offer
        And The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Sales" user
        Then The client purchases are sync in VS admin tool - "selectCdpBumper"

