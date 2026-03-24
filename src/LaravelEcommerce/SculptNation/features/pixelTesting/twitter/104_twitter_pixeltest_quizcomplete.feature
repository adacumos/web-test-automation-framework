@pixelTests @twitter
Feature: LE-VS Twitter Pixel Event Testing - Quiz Complete
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Twitter - Vshred Survey survey-ga - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        When The User describes self as "I'm happy with my body, but"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        When The User describes self as "I'm happy with my body, but"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Twitter"
        When The user starts V Shred survey for "Male"
        And The user starts tracking for twitter event "quizcompleted"
        And The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv5 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        And The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey surveyaka1v13 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        And The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpc - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        And The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey aka1# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "quizcompleted"
        And The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv2 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Twitter"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for twitter event "quizcompleted"
        And The user finishes the V Shred survey and skips video
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: Twitter - Vshred Survey femalefl - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "femalefl" - "Twitter"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for twitter event "quizcompleted"
        And The user finishes the V Shred survey and skips video
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated
