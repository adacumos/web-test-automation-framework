@QA-1777 @MD @adminTool
Feature: LE Admin - Dashboard Page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE Admin Dashboard page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        Then The "Dashboard" pages are loaded
        When The user changes the "New Users" Chart point value to "60"
        When The user changes the "Daily Revenue" Chart point value to "90"
        When The user changes the "Daily Refund" Chart point value to "60"
        When The user changes the "Daily Recovered Upsell Revenue" Chart point value to "90"
