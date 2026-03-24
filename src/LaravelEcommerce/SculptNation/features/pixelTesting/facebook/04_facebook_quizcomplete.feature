@QA-2590 @QA-2595 @pixelTests @facebook
Feature: V Shred Pixel Testing - Quiz Complete
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Survey aka1v3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "aka1v3" - "Facebook"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for facebook
        And The user finishes the V Shred survey and skips video
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey survey-ga# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Facebook"
        And The user starts new Survey GA Funnel for "Man"
        And The user starts tracking for facebook
        When The User describes self as "I'm happy with my body, but"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Facebook"
        When The user starts V Shred survey for "Male"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv5 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey surveyaka1v13 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpc - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey aka1# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Facebook"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Facebook"
        When The user starts V Shred survey for "Male"
        And The user starts tracking for facebook
        And The Male user describes self as "I'm skinny fat"
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Vshred Survey fbkcpcv2 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Facebook"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for facebook
        And The user finishes the V Shred survey and skips video
        Then Verify facebook events and ID for event - "quizComplete" for "Vshred"

    Scenario: Facebook - Sculptnation Survey burnEvolvedfbkcpcv19 - Quiz Complete
        When The user begins tracking and navigates to Sculptnation page "burnEvolvedfbkcpcv19" - "Facebook"
        And The user starts tracking for facebook
        When The user starts Sculptnation survey for "Women"
        And The user waits for the page element to load
        Then Verify facebook events and ID for event - "quizComplete" for "Sculptnation"
