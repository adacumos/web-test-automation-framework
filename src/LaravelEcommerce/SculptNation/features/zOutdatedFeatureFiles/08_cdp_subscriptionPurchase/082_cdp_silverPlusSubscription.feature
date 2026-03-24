@QA-2183
Feature: E2E CDP Subscription Purchase
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Silver Plus Custom Diet Plan
        Then The user navigates to the Custom Coaching Plans page
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
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        And The user navigates to "Trainer Tool" - "Unassigned Plans" menu
        Then The user searches client record in Trainer Tool Unassigned Plans page
        And The user logs out of VS Admin Tool
