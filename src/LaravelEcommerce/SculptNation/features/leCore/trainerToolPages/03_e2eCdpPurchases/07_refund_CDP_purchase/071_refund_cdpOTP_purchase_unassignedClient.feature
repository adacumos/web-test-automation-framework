@QA-2180 @QA-2083 @trainerTool
Feature:  E2E - Refunding One-Time CDP Purchase before Trainer assignment and CDP Plan submission
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Refund CDP purchased as an Add-On - Not yet assigned to a Trainer
        Given The client user purchased CDP as an Add-On offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        And Verifies the CDP membership is added to client profile
        When The user impersonates the Client record
        Then The user completes the V Shred Member Profile
        And The user fills out the Custom Plan Questionnaire
        Then The user stops impersonating client record
        Then The user logs out of VS Admin Tool
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
        And The user logs out of VS Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user views the details of an Order Item
        When The user Refunds a CDP Order through the LE Admin Users page
        Then Verify the Refunded CDP status is synced with VS Admin - Trainer Tool - "Unassigned Plans" page
