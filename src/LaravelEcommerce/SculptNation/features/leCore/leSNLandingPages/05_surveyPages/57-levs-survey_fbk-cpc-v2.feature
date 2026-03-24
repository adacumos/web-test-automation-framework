@QA-3038 @surveyPages @mobileView
Feature: Non-E2E Validate Survey Landing page: sp/survey/survey-fbk-cpc-v2
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Female survey-fbk-cpc-v2 - Get Toned
        Given The user Resizes the browser to "iPhone 15"
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    Scenario: Female survey-fbk-cpc-v2 - Fat Loss Extreme
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When The Female user describes self as "I have 20 lbs or more fat"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Her"

    Scenario: Female survey-fbk-cpc-v2 - Toned Skinny
        Given The user Resizes the browser to "Samsung S24"
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When The Female user describes self as "I'm skinny. I need to add toned muscle"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days $57"
