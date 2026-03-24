@QA-2668 @QA-2604 @pixelTests
Feature: V Shred GTM Event: "Quiz Completed" Pixel Testing - surveyGa
    Background: Load test data
        Given The user loads the LE test data


    Scenario: VS Google Tag - Pixel Test
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Google Tag - VS Quiz Completed - Female Fatloss Extreme
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I have 20 lbs or more fat"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "femaleFatloss"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "femaleFatloss"

    # @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Female Toned
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "femaleToned"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "femaleToned"

    @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Male Fatloss Extreme
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm not happy with my body"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleFatloss"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleFatloss"

    Scenario: Google Tag - VS Quiz Completed - Male Skinny Fat
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleSkinnyFat"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleSkinnyFat"

    Scenario: Google Tag - VS Quiz Completed - Male Ripped
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleRipped"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleRipped"

    @levsSmoke
    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleCleanBulk"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleCleanBulk"
