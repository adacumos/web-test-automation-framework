@ATS-583 @pixelTests @facebook
Feature: V Shred Facebook Pixel Testing - End to End
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Survey testBoostMaxQuiz - End to End
        Given The user navigates to the SculptNation homepage
        And The user starts tracking for facebook
        And The user navigates to "Test Boost Max" Sculptnation Survey page
        When The user selects "3 Bottles" option
        Then Verify facebook events and ID for event - "initiateCheckout" for "Sculptnation"
        Then Verify facebook events and ID for event - "addtocart" for "Sculptnation"
        When The user fills out the funnel order form
        Then Verify facebook events and ID for event - "purchase" for "Sculptnation"
        And The user starts tracking for facebook
        And The user skips the product video
        Then The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
