@QA-1003 @QA-10014 @QA-1005 @leCore @ttSmoke @vsAdmin @trainerTool
Feature: VS Trainer Tool - Suspended Trainers - Page Navigation
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Supended trainers page navigation
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Suspended Trainers" menu
        Then The user selects "50" on the record count selection
        And The user verifies the page returns 50 records listed

    Scenario: Suspended trainers sort header columns
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Suspended Trainers" menu
        Then The user clicks the "Name" header column on the page and verifies the list are sorted

    Scenario: Suspended trainers filter header columns
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Active Trainers" menu
        Then The user suspends the trainor from the list of Active Trainers
        And The user navigates to "Trainers" - "Suspended Trainers" menu
        And The user verifies the Trainer exists on the "Suspended Trainers" page
        And The user reinstates the trainer from the list of Suspended Trainers

