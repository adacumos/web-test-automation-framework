@QA-2324 @trainerTool @ttBeta
Feature:  E2E: CDP Upsell to HT Accelerator through VS Admin
    Background: Client user initially purchased a Program with CDP as an Add On
        Given The user loads the LE test data
        When The user navigates to VShred landing page
        And The user selects VShred "Toned in 90" Program
        Then The user verifies the Checkout form Order details
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Client user is assigned to a Trainer and thereafter Upsells to HT Accelerator
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "regularCdp"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user clears out the session data
        When The user logs into the Vshred Admin Tool as "Sales" user
        When The client user upsells to an Accelerator Program
        Then Verifies the "Accelerator" membership is added to client profile
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        And The user searches client record in Trainer Tool Assigned Plans page
        Then The most recent custom plan purchased is reflected in Trainer Tool page
