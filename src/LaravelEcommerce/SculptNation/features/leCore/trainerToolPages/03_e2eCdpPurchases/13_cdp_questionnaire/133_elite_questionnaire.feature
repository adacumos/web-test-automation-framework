@trainerTool @cdp @questionnaire @levsSmoke
Feature:  V Shred Elite Questionnaire
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user
        When The user creates new Order in VS Admin
        Then Verifies the "Elite" membership is added to client profile

    Scenario: Fillout VS Elite Questionnaire
        When The user impersonates client user to Submit Elite Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
