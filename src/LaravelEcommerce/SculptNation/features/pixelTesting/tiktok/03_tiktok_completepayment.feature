    # @QA-2616 @QA-2619 @pixelTests @tiktok
    # Feature: V Shred TikTok Pixel Testing - Complete Payment
    #     Background: Load test data
    #         Given The user loads the LE test data

    #     Scenario: Tiktok - Vshred Survey flbtv5 - Purchase
    #         When The user navigates to V Shred Survey page with endpoint "flbtv5"
    #         And The user skips the product video
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" Checkout Upsell Offer
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey survey-ga - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Tiktok"
    #         And The user starts new Survey GA Funnel for "Man"
    #         When The User describes self as "I'm happy with my body, but"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" Checkout Upsell Offer
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey survey-ga# - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Tiktok"
    #         And The user starts new Survey GA Funnel for "Man"
    #         When The User describes self as "I'm happy with my body, but"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" Checkout Upsell Offer
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey fbkcpcv3 - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Tiktok"
    #         When The user starts V Shred survey for "Male"
    #         And The Male user describes self as "I'm skinny fat"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" the CDP Bumper Offer and submits the order
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey fbkcpcv5 - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Tiktok"
    #         When The user starts V Shred survey for "Man"
    #         And The Male user describes self as "I'm skinny fat"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         And The user starts tracking for Tiktok
    #         Then The user fills in the fields on the Checkout page and places the order
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey surveyaka1v13 - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Tiktok"
    #         When The user starts V Shred survey for "Man"
    #         And The Male user describes self as "I'm skinny fat"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" the CDP Bumper Offer and submits the order
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey fbkcpc - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Tiktok"
    #         When The user starts V Shred survey for "Man"
    #         And The Male user describes self as "I'm skinny fat"
    #         And The user starts tracking for Tiktok
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The User "Selects" the CDP Bumper Offer and submits the order
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey aka1# - Purchase
    #         When The user begins tracking and navigates to V Shred Survey "aka1#" - "Tiktok"
    #         When The user starts V Shred survey for "Man"
    #         And The Male user describes self as "I'm skinny fat"
    #         Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #         Then The user fills out the survey order form
    #         And The user starts tracking for Tiktok
    #         And The User "Selects" the CDP Bumper Offer and submits the order
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey surveyaka1 - Purchase
    #         When The user navigates to V Shred Survey page with endpoint "surveyaka1"
    #         And The user starts V Shred survey for "Female"
    #         And The user finishes the V Shred survey and skips video
    #         And The user starts tracking for Tiktok
    #         And The user fills out Vshred form and begins tracking "Kendago" for - "tiktok"
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    #     Scenario: Tiktok - Vshred Survey fbkcpcv2 - Purchase
    #         When The user navigates to V Shred Survey page with endpoint "fbkcpcv2"
    #         And The user starts V Shred survey for "Female"
    #         And The user finishes the V Shred survey and skips video
    #         And The user starts tracking for Tiktok
    #         And The user fills out Vshred form and begins tracking "Kendago" for - "tiktok"
    #         Then The user verifies Complete Payment from "Kendago" for "tiktok"
    #         Then The user verifies Complete Payment from "Internal" for "tiktok"

    Scenario: Tiktok - le-vshred femaleGT - Purchase
        When The user navigates to "femaleGT" product page
        Then The user skips the product video
        And The user starts tracking for Tiktok
        Then The user clicks YES! button
        And The user fills out Vshred form and begins tracking "Kendago" for - "tiktok"
        Then The user verifies Complete Payment from "Kendago" for "tiktok"
        Then The user verifies Complete Payment from "Internal" for "tiktok"
