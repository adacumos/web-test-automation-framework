@QA-2202
Feature: Klaviyo Profile Event Validation - Proof of Concept
    Background: Load test data
        Given The user loads the LE test data
    Scenario: Klaviyo Profile Events on CDP Subscription
        When The user navigates to the Custom Coaching Plans page
        And Klaviyo Profile events are monitored
        And The user selects "Monthly Custom Diet & Training" Subscription Plan
        Then The user verifies the Checkout form Order details
        Then The user fills out the funnel order form
        When The user declines the "Burn-Flashsale" Special Offer
        When The user declines the "Burn-Accelerator" Special Offer
        When The user declines the "VShred-University" Special Offer
        When The user declines the "Greens-Bundle" Special Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user fills out the Custom Plan Questionnaire
        And The user logs out from V Shred Member Profile
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Plan Purchased" is logged in Klaviyo
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
        When A Trainer is assigned to the client user
        Then Verify Profile Event "Trainer Assigned" is logged in Klaviyo
        Then The user searches client record in Trainer Tool Assigned Plans page
        And The user logs out of VS Admin Tool
        When The user logs into the Vshred Admin Tool as "Assigned Trainer" user
        Then The user searches client record in Trainer Tool Assigned Plans page
        Then The user uploads a custom plan to client record
        Then Verify Profile Event "Custom Plan Uploaded" is logged in Klaviyo
