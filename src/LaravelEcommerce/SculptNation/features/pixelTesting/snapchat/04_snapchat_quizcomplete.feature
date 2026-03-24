@QA-2607 @QA-2718 @pixelTests @snapchat
Feature: Snapchat V Shred Pixel Testing - Quiz Complete
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Snapchat - Vshred Survey aka1v3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "aka1v3"
        When The user starts V Shred survey for "Female"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The user finishes the V Shred survey and skips video
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey survey-ga - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "survey-ga"
        And The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm happy with my body, but"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey survey-ga# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "survey-ga#"
        And The user starts new Survey GA Funnel for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The User describes self as "I'm happy with my body, but"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv3"
        When The user starts V Shred survey for "Male"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv5 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv5"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey surveyaka1v13 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "surveyaka1v13"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpc - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpc"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey aka1# - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "aka1v3"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv3 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv3"
        When The user starts V Shred survey for "Male"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Vshred Survey fbkcpcv2 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv2"
        When The user starts V Shred survey for "Female"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        And The user finishes the V Shred survey and skips video
        Then Verify Snapchat event "Quiz Completed" are triggered

    Scenario: Snapchat - Sculptnation Survey burnEvolvedfbkcpcv19 - Quiz Complete
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "burnEvolvedfbkcpcv19"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        When The user starts Sculptnation survey for "Women"
        And The user waits for the page element to load
        Then Verify Snapchat event "Quiz Completed" are triggered
