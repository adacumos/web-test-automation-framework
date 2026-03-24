@QA-1433 @MD @adminTool
Feature: LE Admin Page Regression - Permissions
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Permissions pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Permissions" button from the sidebar menu of the Admin Tool Dashboard
        Then The "Permissions" pages are loaded

    Scenario: Edit Existing LE Permission
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Permissions" button from the sidebar menu of the Admin Tool Dashboard
        When The user adds roles an existing Permission
        Then The permission is enabled to the Role
        And The permission updates are reverted

    Scenario: Create New LE Permission
        Given The user logs into the Admin Tool using an account with "admin" credentials
        And The user clicks on the "Permissions" button from the sidebar menu of the Admin Tool Dashboard
        When The user creates a new Permission
        Then The new Permission are attached to the Role
        Then The Permission test data are deleted
