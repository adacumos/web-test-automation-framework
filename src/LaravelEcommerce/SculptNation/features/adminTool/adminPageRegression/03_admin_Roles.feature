@QA-1434 @QA-1717 @QA-1718 @smoke @BETA @MD @GIT @adminTool
Feature: LE Admin Page Regression - Roles
    Background: Load test data
        Given The user loads the LE test data
        And The user logs into the Admin Tool using an account with "admin" credentials

    Scenario: Validate LE Admin Roles page and edit Existing LE Roles
        Given The user clicks on the "Roles" button from the sidebar menu of the Admin Tool Dashboard
        Then The "Roles" pages are loaded
        When The user adds permission an existing Roles
        Then The new role permission is enabled
        Then The role permission updates are reverted

    Scenario: Create New LE Roles
        Given The user clicks on the "Roles" button from the sidebar menu of the Admin Tool Dashboard
        When The user creates a new Role
        Then The new Role can be attached to any user
        Then The Roles test data are deleted

    Scenario: Create a new test user / delete the new Admin test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Admin" role to the user
        Then The user verifies the "Admin" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Customer Service test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Customer Service" role to the user
        Then The user verifies the "Customer Service" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Developer test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Developer" role to the user
        Then The user verifies the "Developer" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Manages Discounts test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Manages Discounts" role to the user
        Then The user verifies the "Manages Discounts" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Marketer test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Marketer" role to the user
        Then The user verifies the "Marketer" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Media Buyer test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Media Buyer" role to the user
        Then The user verifies the "Media Buyer" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Sales Agent test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Sales Agent" role to the user
        Then The user verifies the "Sales Agent" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Sales Manager test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Sales Manager" role to the user
        Then The user verifies the "Sales Manager" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Sales Supervisor test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Sales Supervisor" role to the user
        Then The user verifies the "Sales Supervisor" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Social Media test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Social Media" role to the user
        Then The user verifies the "Social Media" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Trainer test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Trainer" role to the user
        Then The user verifies the "Trainer" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new View Myself Only test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "View Myself Only" role to the user
        Then The user verifies the "View Myself Only" role of the user
        And The user deletes the test user in the Admin Tool

    Scenario: Create a new test user / delete the new Admin Myself Only test user
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        Then The user attaches the "Admin Myself Only" role to the user
        Then The user verifies the "Admin Myself Only" role of the user
        And The user deletes the test user in the Admin Tool
