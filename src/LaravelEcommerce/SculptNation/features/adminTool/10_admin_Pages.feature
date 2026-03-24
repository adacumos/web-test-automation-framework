@QA-1604 @MD @adminTool
Feature: LE Admin menu - Pages
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Login in as admin and verify the admin menu pages is working
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Pages" button from the sidebar menu of the Admin Tool Dashboard
        Then The user sees the Pages listed on the Pages page
        Then The user clicks on the "First" ID on the Pages page
        Then The user Verifies the Page Details fields are populated
        Then The user Verfies the Routes section is visable and Verifies the existance of the SLUG link
        Then The user clicks the Slug link and Verifies the page loads and have correct url
        When The user clicks on the "Pages" button from the sidebar menu of the Admin Tool Dashboard
        Then The user sees the Pages listed on the Pages page
        Then The user clicks on the "Second" ID on the Pages page
        Then The user Verifies the Page Details fields are populated
        Then The user Verfies the Routes section is visable and Verifies the existance of the SLUG link
        Then The user clicks the Slug link and Verifies the page loads and have correct url
        When The user clicks on the "Pages" button from the sidebar menu of the Admin Tool Dashboard
        Then The user sees the Pages listed on the Pages page
        Then The user clicks on the "Third" ID on the Pages page
        Then The user Verifies the Page Details fields are populated
        Then The user Verfies the Routes section is visable and Verifies the existance of the SLUG link
        Then The user clicks the Slug link and Verifies the page loads and have correct url



