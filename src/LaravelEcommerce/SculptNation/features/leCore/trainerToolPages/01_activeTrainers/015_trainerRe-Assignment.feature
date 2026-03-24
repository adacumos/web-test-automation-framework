@QA-2355 @trainerTool @ttSmoke @vsAdmin @levsSmoke
Feature: VS Trainer Tool - Unassign Trainer to a Client Record
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        When The user creates new Order in VS Admin
        Then Verifies the "CDP" membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire

    Scenario: Unassign and Reassign new Trainer to a Client Record
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then A Trainer is assigned to the client user
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The client user upsells to an Accelerator Program
        Then Verifies the "Accelerator" membership is added to client profile
        Then The user logs out of VS Admin Tool
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user searches client record in Trainer Tool Assigned Plans page
        Then The most recent custom plan purchased is reflected in Trainer Tool page
        Then The Trainer is unassigned from the client user
        Then The client user is assigned to a New Trainer
