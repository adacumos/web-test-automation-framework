@QA-997
Feature: VS Trainer Tool - Create New Trainer
    Background: Load test data
        Given The user loads the LE test data

    Scenario:
        Given The user logs into the Vshred Admin Tool as "trainer" user
        When The user creates a new "Trainer" user
        Then The user navigates to "Trainers" - "Active Trainers" menu
        And The user verifies the Trainer exists on the "Active Trainers" page
        And The user navigates to "Trainer Tool" - "Unassigned Plans Beta" menu
        Then The user verifies the Trainer exists on the "Unassigned Plans Beta" page
