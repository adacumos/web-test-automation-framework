@QA-1437
Feature: User creation and cancellation of digital subscription
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Create a new digital subscription / cancel the new digital subscription
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user creates a new test user
        Then The user views the User Information page for the newly created test user
        When The user navigates to "Subscriptions" tab and clicks the New Order button
        Then The user adds a new Plan to the User Subscription Cart using the Add Plan widget
        And The user adds a new Shipping address
        And The user adds a Billing address
        When The user processes the payment for the Digital Subscription Plan
        Then The user cancels the recently made Digital Subscription Plan

