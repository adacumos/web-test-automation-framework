@QA-1561 @QA-1711 @MD @adminTool
Feature: Sales Funnels in Admin Tool
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login as admin and Verfiy the Sales Funnels page and Redirects within the page
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the Sales Funnels label from the sidebar menu of the Admin Tool Dashboard
        Then The user verifies the Sales Funnels URL in Sales Funnels page
        And The user verifies the table and table headers in "Sales Funnels" page


    Scenario: Login as admin and Verfiy the create, edit and delete of Sales Funnels Functionality
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the Sales Funnels label from the sidebar menu of the Admin Tool Dashboard
        And The user clicks on the "Create Funnel" button
        And The user fills the data for the fields in the sales funnel page
        And The user clicks on the "Create" sales funnel button in the sales funnels page
        Then The user verifies the "Created" sales funnel
        Then The user Verifies all "Sales Funnel" Details fields
        When The user click on the "Edit" sales funnel icon
        And The user fills the updated sales funnel name for the field in the sales funnel page
        And The user clicks on the "Save Funnel" sales funnel button in the sales funnels page
        Then The user verifies the "Updated" sales funnel
        When The user click on the "Delete" sales funnel icon
        And The user clicks on the confirm delete button
        Then The user verifies the "Deleted" sales funnel
