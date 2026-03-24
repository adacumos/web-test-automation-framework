@QA-2616 @QA-2619 @pixelTests @tiktok @surveygaHashPixel
Feature: V Shred TikTok Pixel Testing - Complete Payment
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Tiktok - Vshred Survey survey-ga pixel testing - internal - female - get toned
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "survey-ga#"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify the ID and Event "Add To Cart" are present in any request for - "vsInternal" for "tiktok"
        Then The user fills out the survey order form
        And The user starts tracking for Tiktok
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies Complete Payment from "Internal" for "tiktok"

    Scenario: Tiktok - Vshred Survey survey-ga pixel testing - kendago - female - soft
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "survey-ga#"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify the ID and Event "Add To Cart" are present in any request for - "vsKendago" for "tiktok"
        Then The user fills out the survey order form
        And The user starts tracking for Tiktok
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies Complete Payment from "Kendago" for "tiktok"

    Scenario: Tiktok - Vshred Survey survey-ga pixel testing - internal - male - skinny fat
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "survey-ga#"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify the ID and Event "Add To Cart" are present in any request for - "vsInternal" for "tiktok"
        Then The user fills out the survey order form
        And The user starts tracking for Tiktok
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies Complete Payment from "Internal" for "tiktok"

    Scenario: Tiktok - Vshred Survey survey-ga pixel testing - kendago - male - not happy with my body
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "survey-ga#"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"
        And The user starts new Survey GA Funnel for "Man"
        Then The User describes self as "I'm not happy with my body"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify the ID and Event "Add To Cart" are present in any request for - "vsKendago" for "tiktok"
        Then The user fills out the survey order form
        And The user starts tracking for Tiktok
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies Complete Payment from "Kendago" for "tiktok"
