@QA-2426 @trainerTool @ttSmoke @cdp @vsAdmin
Feature:  E2E: Purchase V Shred HT Elite Program through VS Admin
    Background: Load test data
        Given The user loads the LE test data
    Scenario: Purchase V Shred HT Elite Program through VS Admin
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        When The user creates new Order in VS Admin
        Then Verifies the "Elite" membership is added to client profile
        When The user impersonates client user to Submit Elite Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
