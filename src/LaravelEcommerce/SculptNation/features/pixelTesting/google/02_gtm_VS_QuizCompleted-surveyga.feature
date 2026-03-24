@QA-2668 @QA-2601 @pixelTests
Feature: Sculptnation GTM Event: "Quiz Completed" Pixel Testing - surveyGa
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Google Tag - Pixel Test
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "SN Quiz" event is initiated


    @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Female Skinny Fat
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "femaleSkinny"

    Scenario: Google Tag - VS Quiz Completed - Female Fatloss Extreme
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I have 20 lbs or more fat"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "femaleFatloss"

    @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Female Toned
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "femaleToned"

    Scenario: Google Tag - VS Quiz Completed - Male Fatloss Extreme
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm not happy with my body"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "maleFatloss"

    @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Male Skinny Fat
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "maleSkinnyFat"

    Scenario: Google Tag - VS Quiz Completed - Male Ripped
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "maleRipped"

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk
        Given The user navigates to "Legacy Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And Verify "Internal" GTM tag for "SN Quiz" event is initiated - "maleCleanBulk"
