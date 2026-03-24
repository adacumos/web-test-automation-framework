@QA-3038 @surveyPages
Feature: Non-E2E Validate Survey Landing page: sp/survey/survey-aka1-v13
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man VS survey-aka1-v13-Ripped 90 Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $57"

    @mobileView
    Scenario: Woman VS survey-aka1-v13-Toned 90 Skip All Funnel Offers
        Given The user Resizes the browser to "Samsung S24"
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    @mobileView
    Scenario: Man VS survey-aka1-v13-Fatloss Skip All Funnel Offers
        Given The user Resizes the browser to "Samsung S10"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm not happy with my body"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Him"

    Scenario: Man VS survey-aka1-v13-Clean Bulk Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I can't get bigger or gain muscle"
        And The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The Checkout Offer details displays - "Clean Bulk"

    Scenario: Woman VS survey-aka1-v13-Fatloss Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I have 20 lbs or more fat"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Her"
