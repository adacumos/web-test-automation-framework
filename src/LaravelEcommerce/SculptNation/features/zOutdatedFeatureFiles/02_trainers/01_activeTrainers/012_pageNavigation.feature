@QA-1000 @QA-1001 @QA-1002
Feature: VS Trainer Tool - Active Trainers - Page Navigation

    Scenario: Active trainers page navigation
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Active Trainers" menu
        Then The user selects "50" on the record count selection
        Then The user selects "50" on the record count selection
        And The user verifies the page returns 50 records listed

    Scenario: Active trainers sort header columns
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Active Trainers" menu
        Then The user clicks the "Name" header column on the page and verifies the list are sorted

    Scenario: Active trainers filter header columns
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Active Trainers" menu
        Then The user filters the list by typing "Trainer One" on the Name header column and verifies the list is filtered

