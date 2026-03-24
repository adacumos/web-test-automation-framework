@MD @adminTool
Feature: Redirects in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Redirects link and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Redirects" button from the sidebar menu of the Admin Tool Dashboard
        Then The user sees the Redirects listed on the Redirects page
        Then The user clicks on the "Redirects" links
        Then The user Verifies all "Redirect" Details fields
        Then The user Verifies redirect is working
