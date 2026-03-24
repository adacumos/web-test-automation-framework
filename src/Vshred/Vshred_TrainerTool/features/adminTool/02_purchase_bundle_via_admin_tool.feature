@smoke @QA-510
Feature: Purchase Bundle via Admin Tool
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Purchase Bundle
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user creates a new test user
        Then The user views the User Information page for the newly created test user
        When The user navigates to "Purchases" tab and clicks the New Order button
        Then The user adds a "Bundle" to the Cart using the Add Offer widget
        And The user adds a new Shipping address
        And The user adds a Billing address
        When The user places the Order and submits the payment
        Then The user navigates to the Orders page and views the recently placed order
        And The user verifies the VShred order confirmation email
        Given The user logs into BrainTree
        Then The user validates that the purchase is recorded in BrainTree
