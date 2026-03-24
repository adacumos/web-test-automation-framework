@QA-3038 @surveyPages
Feature: Non-E2E Validate Survey Landing page: sp/survey/survey-aka1
    Background: Load test data
        Given The user loads the LE test data

    # @mobileView
    Scenario: Female Toned Skinny
        Given The user Resizes the browser to "iPhone XR"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    @mobileView
    Scenario: Female Fat Loss Extreme
        Given The user Resizes the browser to "iPhone12 pro max"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        And The Female user describes self as "I have 20 lbs or more fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Her"


    Scenario: Female Get Toned in 90 Days
        Given The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Female"
        When The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    @mobileView
    Scenario: Male Clean Bulk
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        And The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The Checkout Offer details displays - "Clean Bulk"

    Scenario: Male Skinny Ripped
        When The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Male"
        When The Male user describes self as "I'm skinny fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $57"

    # @mobileView
    Scenario: Male Fat Loss Extreme
        Given The user Resizes the browser to "Samsung S24"
        When The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Male"
        Then The Male user describes self as "I'm not happy with my body"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Him"

    Scenario: Male Get Ripped
        When The user navigates to V Shred Survey page
        And The user starts V Shred survey for "Male"
        When The Male user describes self as "I'm happy with my body, but"
        And The user clicks "EVERYTHING FOR JUST $67.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $67"
