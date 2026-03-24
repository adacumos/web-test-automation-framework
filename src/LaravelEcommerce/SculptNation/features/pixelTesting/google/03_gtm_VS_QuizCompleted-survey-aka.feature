@QA-2668
Feature: V Shred GTM Event: "Quiz Completed" Pixel Testing - survey-aka1
    Background: Load test data
        Given The user loads the LE test data

    @pixelTests
    Scenario: Google Tag - VS Quiz Completed - Female Toned
        When The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Google Tag - VS Quiz Completed - Female Skinny Fat
        When The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "femaleSkinny"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "femaleSkinny"

    Scenario: Google Tag - VS Quiz Completed - Female Fat Loss Extreme
        When The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        And The Female user describes self as "I have 20 lbs or more fat"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "femaleFatloss"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "femaleFatloss"

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk
        When The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleCleanBulk"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleCleanBulk"

    @pixelTests
    Scenario: Google Tag - VS Quiz Completed - Male Fat Loss Extreme
        When The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm not happy with my body"
        Then Verify GTM event: "Quiz Completed" exist
        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleFatloss"
        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleFatloss"

#    Scenario: Google Tag - VS Quiz Completed - Male Skinny Fat
#        When The user navigates to V Shred Survey page
#        When The user starts V Shred survey for "Man"
#        And The Male user describes self as "I'm skinny fat"
#        Then Verify GTM event: "Quiz Completed" exist
#        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleSkinnyFat"
#        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleSkinnyFat"

#    Scenario: Google Tag - VS Quiz Completed - Male Ripped
#        When The user navigates to V Shred Survey page
#        When The user starts V Shred survey for "Man"
#        And The Male user describes self as "I'm happy with my body, but"
#        Then Verify GTM event: "Quiz Completed" exist
#        Then Verify "Kendago" GTM tag for "VS Quiz" event is initiated - "maleRipped"
#        And Verify "Internal" GTM tag for "VS Quiz" event is initiated - "maleRipped"
