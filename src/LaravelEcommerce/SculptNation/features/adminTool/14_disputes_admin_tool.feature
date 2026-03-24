
@QA-1601 @MD @adminTool
Feature: LE Admin menu - Disputes
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu Disputes are working and creates a new Disputes
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Disputes" button from the sidebar menu of the Admin Tool Dashboard
        Then The user creates a new Dispute
        When The user clicks on the "Disputes" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the table is populated with entries
        # Then The user Verifies each table entry details are populated
        Then The user Verifies the newly created Dispute
        Then The user Deletes the newly created Dispute
# Then The user Verifies the newly created Disputed no longer exists
# Then The user Verifies each table entry details are populated
