@QA-1776 @QA-1774 @MD @adminTool
Feature: LE Admin - Login with 2FA Authentication Enabled having different User Roles
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create new LE Admin Customer Service User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Customer Service" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool

    Scenario: Create new LE Admin Developer User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Developer" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool

    Scenario: Create new LE Admin Marketer User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Marketer" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool

    Scenario: Create new LE Admin Sales Agent User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Sales Agent" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool

    Scenario: Create new LE Admin Social Media User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Social Media" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool

    Scenario: Create new LE Admin Media Buyer User and Login with 2FA authentication enabled
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user creates a new test user in the Admin Tool
        Then The user sees the User Information page for the newly created test user
        When The user attaches the "Media Buyer" role to the user
        And The password is reset to default value
        Then The user logs out of Admin Tool
        When The New User logs with Two-Factor Authorization
        Then The Admin Tool Dashboard is loaded
        Then The user logs out of Admin Tool
        When The user logs into the Admin Tool using an account with "admin" credentials
        Then The user searches the "Dynamic" test email
        And The user deletes the test user in the Admin Tool
