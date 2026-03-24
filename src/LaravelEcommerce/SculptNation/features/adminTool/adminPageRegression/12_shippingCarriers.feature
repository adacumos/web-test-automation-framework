@QA-1611 @MD @adminTool
Feature: LE Admin Page Regression - Shipping > Carriers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Shipping > Carrier pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Shipping-Carriers" menu from the Admin Tool Dashboard
        Then The Shipping "Carriers" pages are loaded

    Scenario: Create new Carrier
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Shipping-Carriers" menu from the Admin Tool Dashboard
        And The user creates a new Shipping Carrier
        Then The new Carrier is available in Shipping Category selection
        Then Delete Shipping Carrier Test Data
