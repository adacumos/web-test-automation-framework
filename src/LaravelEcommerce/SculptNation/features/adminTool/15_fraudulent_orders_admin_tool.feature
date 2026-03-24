@QA-1680
Feature: LE Admin menu - Fraudulent Orders
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu Fraudulent Orders are working
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Fraudulent Orders" button from the sidebar menu of the Admin Tool Dashboard
        # Then The user Verifies the table is empty
        Then The user Verifies each table entry details are populated
