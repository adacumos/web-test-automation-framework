@QA-2668 @QA-2599 @pixelTests @gtm
Feature: Sculptnation GTM Event Pixel Testing - End to End
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Google Tag - Vshred Survey testBoostMaxQuiz - End to End
        Given The user navigates to the SculptNation homepage
        And The user navigates to "Test Boost Max" Sculptnation Survey page
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal" for "gtm"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago" for "gtm"
        When The user selects "3 Bottles" option
        Then Verify the ID and Event "Add To Cart" are present in any request for - "snInternal" for "gtm"
        Then Verify the ID and Event "Add To Cart" are present in any request for - "snKendago" for "gtm"
        When The user fills out the funnel order form
        Then Verify the ID and Event "Purchase" are present in any request for - "snInternal" for "gtm"
        Then Verify the ID and Event "Purchase" are present in any request for - "snKendago" for "gtm"
        And The user skips the product video
        Then The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
