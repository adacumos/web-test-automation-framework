@ATS-573 @pixelTests @facebook
Feature: V Shred Facebook Pixel Testing - Upsell
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Sculptnation Internal/kendago surveyMaleFl - end to end
        When The user navigates to V Shred Survey page
        And The user skips the product video
        And The user starts tracking for facebook
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify facebook events and ID for event - "initiateCheckout" for "Sculptnation"
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"
        Then The user fills out the survey order form
        Then The user submits the order
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"
        And The user starts tracking for facebook
        And The user skips the product video
        Then Verify facebook events and ID for event - "Upsell" for "Sculptnation"
