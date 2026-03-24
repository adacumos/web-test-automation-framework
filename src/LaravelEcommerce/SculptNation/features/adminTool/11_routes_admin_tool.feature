@QA-1640 @QA-1560 @QA-1671 @MD @adminTool
Feature: Routes in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Routes page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Routes" button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Routes URL in Routes page
        And The user enters the "route id" in the search textbox
        Then The user clicks on the "Routes" links
        Then The user Verifies all "route id" Details fields

    Scenario: Login as admin and Verfiy the Routes Search Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Routes" button from the sidebar menu of the Admin Tool Dashboard
        And The user enters the "route id" in the search textbox
        Then The user Verifies all "route id" Details fields

    Scenario: Login as admin and Verfiy the Edit Route Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Routes" button from the sidebar menu of the Admin Tool Dashboard
        And The user enters the "route id" in the search textbox
        When The user clicks on the route edit icon
        And The user fills the "updated route" name for the fields in the routes page
        And The user clicks on the update route button in the routes page
        Then The user verifies the updated route
        And The user clicks on the edit route icon
        And The user fills the "route" name for the fields in the routes page
        And The user clicks on the update route button in the routes page
        Then The user Verifies all "route id" Details fields
