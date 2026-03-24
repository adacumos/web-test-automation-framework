@QA-2122 @QA-2154 @trainerTool @leCore @vsPrograms @cdp
Feature:  E2E Purchase Custom Diet Plan through LE V Shred survey page /results-female-fl-bt-v5
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and selects CDP Bumper
        Given The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        When The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Then The user uploads a custom plan to client record
