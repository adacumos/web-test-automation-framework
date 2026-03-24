@QA-2124 @QA-2154
Feature: E2E Purchase Custom Diet Plan through LE V Shred survey page /survey/fbk-cpc-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE VS Survey - Toned in 90 Days with CDP Bumper
        Given The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Female"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The user fills out the shipping order form
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Then The Orders are sync in the Admin Tool - "cdpBumper"
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Then The user uploads a custom plan to client record
