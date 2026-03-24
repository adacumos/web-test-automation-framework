@QA-2122 @QA-2154
Feature:  E2E Purchase Custom Diet Plan through LE V Shred survey page /results-female-fl-bt-v5
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and selects CDP Funnel
        Given The user navigates to V Shred Survey page
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpFunnel"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Then The Orders are sync in the Admin Tool - "cdpFunnel"
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
