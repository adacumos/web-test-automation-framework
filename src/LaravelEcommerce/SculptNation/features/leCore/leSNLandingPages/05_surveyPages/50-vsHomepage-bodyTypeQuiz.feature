@QA-3038 @surveyPages @mobileView
Feature: Non-E2E Validate Survey Landing page: utm_source=legacy-vs&utm_campaign=homepage-quiz&ref=home
    Background: Load test data
        Given The user loads the LE test data

    Scenario: V Shred Homepage - Female Quiz - FLE
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Female"
        And The User describes self as "I have 20 lbs or more fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Her"

    Scenario: V Shred Homepage - Female Quiz - Toned Skinny
        And The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Female"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days $57"

    Scenario: V Shred Homepage - Female Quiz - Toned 90D
        Given The user Resizes the browser to "iPhone12 pro max"
        And The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Female"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        And The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Toned In 90 Days"

    Scenario: V Shred Homepage - Male Quiz - Skinny Ripped
        Given The user Resizes the browser to "Tablet"
        And The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Male"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $57"

    Scenario: V Shred Homepage - Male Quiz - Clean Bulk
        Given The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        When The user clicks "EVERYTHING FOR JUST $87.00" button
        Then The Checkout Offer details displays - "Clean Bulk"

    Scenario: V Shred Homepage - Male Quiz - Fat Loss Extreme
        Given The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Male"
        And The Male user describes self as "I'm not happy with my body"
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Fat Loss Extreme for Him"

    Scenario: V Shred Homepage - Male Quiz - Ripped
        Given The user navigates to VShred landing page
        When The user starts V Shred Quiz for "Male"
        And The Male user describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The Checkout Offer details displays - "Ripped In 90 Days $67"
