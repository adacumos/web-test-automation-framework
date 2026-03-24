@QA-2354 @trainerTool @vsAdmin
Feature: VS Trainer Tool - Create New Trainer Manager User and assign Abilities
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create New Trainer Manager User then adds member Abilities
        Given The user logs into the Vshred Admin Tool as "Admin" user
        When The user creates a new "Trainer" user
        Then Add user abilities as a Trainer Manager
        Then The user logs out of VS Admin Tool
        And The user clears out the session data
        When The new user created logs into the Vshred Admin Tool
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        And The user navigates to "Trainer Tool" - "Assigned Clients Beta" menu
        Then The user navigates to "Trainers" - "Active Trainers" menu
        Then The user navigates to "Trainers" - "Suspended Trainers" menu
