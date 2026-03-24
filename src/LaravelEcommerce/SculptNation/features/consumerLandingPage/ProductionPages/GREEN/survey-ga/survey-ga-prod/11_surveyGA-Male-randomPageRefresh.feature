@negative
Feature: LE Move Landing page - survey-ga - Male
    Background: Load test data
        Given The user clears out the session data
        And The user loads the LE test data

    Scenario: Ramdom page Reloads on Survey pages - Skinny Ripped
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Man"
        When The User describes self as "I'm skinny fat"

    Scenario: Ramdom page Reloads on Survey pages - Ripped
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Man"
        When The User describes self as "I'm happy with my body, but"

    Scenario: Ramdom page Reloads on Survey pages - Fat loss for Him
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Man"
        Then The User describes self as "I'm not happy with my body"

    Scenario: Ramdom page Reloads on Survey pages - Clean Bulk
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
