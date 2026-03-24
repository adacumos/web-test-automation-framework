@QA-2541 @QA-2546 @QA-2575 @cdp @vidalytics
Feature: VS Homepage - Male Body Quiz - Get Diet and Training Specific to Body Type
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Homepage Video - Male Body Quiz - Clean Bulk - CDP Bumper
        Given Klaviyo Profile events are monitored
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Get Diet & Training"
        When The user starts V Shred survey for "Man"
        When The Male user describes self as "I can't get bigger or gain muscle"
        When The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
