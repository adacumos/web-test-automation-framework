@QA-2127 @QA-2076 @QA-2077 @QA-2078
Feature: E2E Purchase Custom Diet Plan through LE V Shred survey page /survey/fbk-cpc-v2
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE VS Female Survey - Get Toned - CDP Funnel
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        And The User "Declines" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpFunnel"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Then The Orders are sync in the Admin Tool - "cdpFunnel"
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
