@QA-2324 @trainerTool @cdp @vsAdmin
Feature:  E2E: CDP Upsell to HT Accelerator through VS Admin
    Background: Load test data
        Given The user loads the LE test data
    Scenario: Initially purchase a regular CDP and thereafter Upsell to HT Accelerator
        Given The user navigates to VShred landing page
        When The user selects VShred "Toned in 90" Program
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "regularCdp"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The client user upsells to an Accelerator Program
        Then Verifies the "Accelerator" membership is added to client profile
        When The user impersonates client user to Submit Accelerator Questionnaire
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        And The user searches client record in Trainer Tool Assigned Plans page
        Then The most recent custom plan purchased is reflected in Trainer Tool page

