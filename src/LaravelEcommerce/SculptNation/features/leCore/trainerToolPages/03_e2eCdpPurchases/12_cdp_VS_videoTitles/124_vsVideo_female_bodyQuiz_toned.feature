@QA-2541 @QA-2546 @QA-2575 @cdp @vidalytics @klaviyoSmoke @levsSmoke
Feature: VS Homepage - Body Type Quiz - Get Diet and Training Specific to Body Type
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: VS Homepage Video - Female Quiz - Get Toned - CDP Bumper
        Given Klaviyo Profile events are monitored
        And The user Resizes the browser to "iPhone XR"
        When The user navigates to VShred landing page
        And The user scrolls to the Video container page section
        And The user clicks the video image "Get Diet & Training"
        When The user starts V Shred survey for "Woman"
        When The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        When The user plays the vidalytics product video
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User Selects "One Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        Given The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then Verify Profile Event "Trainer Assigned" is logged in Klaviyo
