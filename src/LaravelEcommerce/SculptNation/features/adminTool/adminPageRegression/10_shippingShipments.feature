@QA-1669 @MD @adminTool
Feature: LE Admin Page Regression - Shipping > Shipments
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Shipping > Shipments pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Shipments" menu from the Admin Tool Dashboard
        Then The Shipping "Shipments" pages are loaded
        When The user captures the "Shipments" resource details
        And The user navigates to Shipment's "Orders" linked resource
        Then The Shipment details are synced with the linked resources
        When The user navigates to Shipment's "Order-Offers" linked resource
        Then The Shipment details are synced with the linked resources
