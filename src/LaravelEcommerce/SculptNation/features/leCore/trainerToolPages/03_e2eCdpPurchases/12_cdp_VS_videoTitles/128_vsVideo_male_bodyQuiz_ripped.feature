@QA-2541 @QA-2546 @cdp @vidalytics
Feature: VS Homepage - Male Body Quiz - Get Diet and Training Specific to Body Type
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: VS Homepage Video - Male Body Quiz - Get Ripped - CDP Bumper
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Get Diet & Training"
        When The user starts V Shred survey for "Man"
        When The Male user describes self as "I'm happy with my body, but"
        When The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
