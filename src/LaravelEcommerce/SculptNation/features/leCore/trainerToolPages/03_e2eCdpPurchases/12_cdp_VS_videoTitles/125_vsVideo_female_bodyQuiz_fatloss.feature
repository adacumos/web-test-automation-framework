@QA-2541 @QA-2546 @cdp @vidalytics
Feature: VS Homepage - Body Type Quiz - Get Diet and Training Specific to Body Type
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Homepage Video - Female Quiz - Fat Loss Extreme - CDP Funnel
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Get Diet & Training"
        When The user starts V Shred survey for "Woman"
        When The Female user describes self as "I have 20 lbs or more fat"
        When The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
