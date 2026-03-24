@QA-1679 @MD
Feature: LE Admin Page Regression - Shipping > Fulfillment Logs
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Shipping > Fulfillment Logs pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Fulfillment-Logs" menu from the Admin Tool Dashboard
        Then The Shipping "Fulfillment-Logs" pages are loaded
        When The user captures the "Fulfillment-Logs" resource details
        Then A unique Shipment Resource can be traced to a Client Order
