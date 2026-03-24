@QA-1731
Feature: Marketing Lists in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Lists page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Lists" button from the sidebar menu of the Admin Tool Dashboard
        Then The user verifies the lists URL in lists page
        And The user Verifies the table is populated with entries
        And The user Verifies each table entry details are populated

    Scenario: Login as admin and Verfiy the Lists Search Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Lists" button from the sidebar menu of the Admin Tool Dashboard
        And The user enters the "list id" in the search textbox
        Then The user Verifies all "list id" Details fields
