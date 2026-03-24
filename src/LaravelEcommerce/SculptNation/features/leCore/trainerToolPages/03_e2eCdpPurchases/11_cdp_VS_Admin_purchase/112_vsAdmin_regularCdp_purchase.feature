@QA-2368 @trainerTool @cdp @vsAdmin
Feature:  E2E: Purchase V Shred Program with CDP Bumper through VS Admin
    Background: Load test data
        Given The user loads the LE test data
    Scenario: Purchase V Shred Program Regular CDP through VS Admin
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        When The user creates new Order in VS Admin
        Then Verifies the "CDP" membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        Then The client purchases are sync in VS admin tool - "adminOrder"
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
