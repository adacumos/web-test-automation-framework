@QA-2356 @trainerTool @ttSmoke @vsAdmin
Feature: VS Trainer Tool - Multiple Client assignment to a Trainer
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        When The user creates new Order in VS Admin
        Then Verifies the "CDP" membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire

    Scenario: Unassign and Reassign new Trainer to a Client Record
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        When The user creates a new "Trainer" user
        Then The user navigates to "Trainers" - "Active Trainers" menu
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The Trainer Manager assigns multiple clients records to a new Trainer
        Then The user logs out of VS Admin Tool
        When The new user created logs into the Vshred Admin Tool
        Then The user navigates to "Trainer Tool" - "Assigned Clients" menu
        And Multiple client records are assigned to the new Trainer

