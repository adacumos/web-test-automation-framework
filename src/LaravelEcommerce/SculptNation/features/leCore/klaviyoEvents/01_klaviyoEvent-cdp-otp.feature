@QA-2202 @klaviyoSmoke @klaviyoEvents @levsSmoke
Feature: Klaviyo Profile Event Validation - Trainer Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify Klaviyo Profile Event is logged
        Given The user navigates to V Shred Survey page
        And Klaviyo Profile events are monitored
        When The user starts V Shred survey for "Man"
        When A "Male" client purchases the "Fat Loss Extreme for Him" Program
        When The User "Selects" the CDP Bumper Offer and submits the order
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user fills out the shipping order form
        Then The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpBumper"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        Given The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        When A Trainer is assigned to the client user
        Then Verify Profile Event "Trainer Assigned" is logged in Klaviyo
        Then The user searches client record in Trainer Tool Assigned Plans page
        Given The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        When The user uploads a custom plan to client record
        Then Verify Profile Event "Custom Plan Uploaded" is logged in Klaviyo
