@QA-1635 @QA-1641 @QA-1562 @MD @adminTool
Feature: Templates in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Templates page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the Templates button from the sidebar menu of the Admin Tool Dashboard
        Then The user Verifies the Templates URL in Templates page
        And The user enters the "template id" in the search textbox
        Then The user clicks on the "Templates" links
        Then The user Verifies all "template id" Details fields

    Scenario: Login as admin and Verfiy the Templates Search Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the Templates button from the sidebar menu of the Admin Tool Dashboard
        And The user enters the "template id" in the search textbox
        Then The user Verifies all "template id" Details fields

    Scenario: Login as admin and Verfiy the create, edit and delete of Template Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the Templates button from the sidebar menu of the Admin Tool Dashboard
        And The user clicks on the "create template" button
        And The user fills the "Template name" for the fields in the template page
        And The user clicks on the "Create" template button in the template page
        Then The user verifies the "Created" template
        When The user clicks on the Edit template icon
        And The user fills the "Updated template name" for the fields in the template page
        And The user clicks on the "Update" template button in the template page
        Then The user verifies the "Updated" template
        When The user clicks on the Delete template icon
        And The user clicks on the confirm delete button

