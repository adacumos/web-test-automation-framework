@QA-2616 @QA-2619 @pixelTests @tiktok
Feature: V Shred TikTok Pixel Testing - End to End
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Tiktok - Vshred Survey testBoostMaxQuiz - snInternal - End to End
        When The user begins tracking and navigates to Sculptnation page "testBoostMaxquizvsl" - "Tiktok"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal" for "tiktok"
        And The user skips the product video
        And The user starts tracking for Tiktok
        Then The user select "3" number of bottles by qty
        Then The user selects "Skyrocket my manhood" to continue to the checkout page
        Then Verify the ID and Event "Add To Cart" are present in any request for - "snInternal" for "tiktok"
        Then The user fills in the fields on a SN Secure Checkout page and places the order
        And The user starts tracking for Tiktok
        And The user skips the product video
        Then The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
