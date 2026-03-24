@QA-2180 @QA-2083 @trainerTool
Feature:  E2E - Refunding One-Time CDP Funnel Purchase post Trainer assignment
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Refund CDP purchased as a Funnel Offer - Already Assigned to a Trainer
        Given The client user purchased CDP through a VS Survey Funnel Offer
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpFunnel"
        And Verifies the CDP membership is added to client profile
        When The user impersonates the Client record
        And The user fills out the Custom Plan Questionnaire
        And The user stops impersonating client record
        Then The user logs out of VS Admin Tool
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        And The user logs out of VS Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user views the details of an Order Item
        When The user Refunds a CDP Order through the LE Admin Users page
        Then Verify the Refunded CDP status is synced with VS Admin - Trainer Tool - "Assigned Clients" page
