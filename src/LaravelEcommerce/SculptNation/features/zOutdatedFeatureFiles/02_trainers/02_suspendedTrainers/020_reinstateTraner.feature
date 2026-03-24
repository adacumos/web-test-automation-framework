@QA-999

Feature: VS Trainer Tool - Reinstate Trainer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Reinstate trainer from Suspended Trainers
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user navigates to "Trainers" - "Active Trainers" menu
        Then The user suspends the trainor from the list of Active Trainers
        And The user navigates to "Trainers" - "Active Trainers" menu
        And The user verifies the Trainer does not exists on the "Active Trainers" page
        And The user navigates to "Trainers" - "Suspended Trainers" menu
        And The user verifies the Trainer exists on the "Suspended Trainers" page
        And The user reinstates the trainer from the list of Suspended Trainers
        And The user verifies the Trainer does not exists on the "Suspended Trainers" page
        And The user navigates to "Trainers" - "Active Trainers" menu
        And The user verifies the Trainer exists on the "Active Trainers" page
        And The user navigates to "Trainer Tool" - "Unassigned Plans Beta" menu
        Then The user verifies the Trainer exists on the "Unassigned Plans Beta" page
