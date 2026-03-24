@QA-2089 @QA-2076 @QA-2077 @QA-2078 @trainerTool @leCore @vsPrograms @cdp @mobileView
Feature: E2E Purchase Custom Diet Plan through LE V Shred survey page /survey/fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE VS Survey - Get Toned with CDP Bumper
        Given The user Resizes the browser to "iPhone12 pro max"
        And The user navigates to V Shred Survey page
        When The user starts V Shred survey for "Woman"
        When A "Female" client purchases the "Toned in 90 Days" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        Then The user impersonates the Client record
        And The user Resizes the browser to "iPhone12 pro max"
        And The user fills out the Custom Plan Questionnaire
        And The user Resizes the browser to desktop view
        And The user stops impersonating client record
        Then The user logs out of VS Admin Tool
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Then The user uploads a custom plan to client record
