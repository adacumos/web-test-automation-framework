@QA-3038 @surveyPages @mobileView
Feature: Non-E2E Validate Survey Landing page: sp/survey/fbk-cpc#
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman survey/fbk-cpc# - Get Toned
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    Scenario: Woman survey/fbk-cpc# - Fat Loss Extreme
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When The Female user describes self as "I have 20 lbs or more fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Her"

    Scenario: Woman survey/fbk-cpc# - Skinny Toned
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    Scenario: Man survey/fbk-cpc# - Clean Bulk
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The Checkout Offer details displays - "Clean Bulk"

    Scenario: Man survey/fbk-cpc# - Fat Loss Extreme
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm not happy with my body"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Him"

    Scenario: Man survey/fbk-cpc# - Skinny Ripped
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $57"

    Scenario: Man survey/fbk-cpc# - Ripped
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $67"
