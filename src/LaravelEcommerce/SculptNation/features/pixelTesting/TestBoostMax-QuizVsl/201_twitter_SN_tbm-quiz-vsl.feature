@QA-2616 @QA-2619 @pixelTests @twitter
Feature: V Shred twitter Pixel Testing - End to End
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Twitter - Vshred Survey testBoostMaxQuiz - End to End
        Given The user navigates to the SculptNation homepage
        And The user navigates to "Test Boost Max" Sculptnation Survey page
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal" for "twitter"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago" for "twitter"
        When The user selects "3 Bottles" option
        Then Verify the ID and Event "Add To Cart" are present in any request for - "snInternal" for "twitter"
        Then Verify the ID and Event "Add To Cart" are present in any request for - "snKendago" for "twitter"
        When The user fills out the funnel order form
        Then Verify the ID and Event "Purchase" are present in any request for - "snInternal" for "twitter"
        Then Verify the ID and Event "Purchase" are present in any request for - "snKendago" for "twitter"
        And The user skips the product video
        Then The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        Then Verify the ID and Event "Upsell" are present in any request for - "snInternal" for "twitter"
        Then Verify the ID and Event "Upsell" are present in any request for - "snKendago" for "twitter"
