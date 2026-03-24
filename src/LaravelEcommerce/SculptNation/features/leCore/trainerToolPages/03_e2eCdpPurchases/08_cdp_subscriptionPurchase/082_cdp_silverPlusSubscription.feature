@QA-2183 @trainerTool @vsPrograms @cdp
Feature: E2E CDP Subscription Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Silver Plus Custom Diet Plan
        Then The user navigates to the Custom Coaching Plans page
        And The user selects "Monthly Custom Diet & Training" Subscription Plan
        Then The user verifies the Checkout form Order details
        Then The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        When The user declines the "Burn-Flashsale" Special Offer
        When The user declines the "Burn-Accelerator" Special Offer
        When The user declines the "VShred-University" Special Offer
        When The user declines the "Greens-Bundle" Special Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdpSilverPlus"
        Then Verifies the CDP membership is added to client profile
        When The user impersonates client user to Submit Custom Questionnaire
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
        And The user logs out of VS Admin Tool
