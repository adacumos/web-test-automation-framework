@QA-1629 @MD @adminTool
Feature: LE Admin Page Regression - Finance > Plans
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Finance > Plans pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Plans" button from the sidebar menu of the Admin Tool Dashboard
        Then The Finance "Plans" pages are loaded

    Scenario: Edit an existing Plans and create new purchase
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Plans" button from the sidebar menu of the Admin Tool Dashboard
        And The user edits an existing Plan
        When The user creates a new test user in the Admin Tool
        Then The user navigates to the New Order page
        And The user adds the Offer linked to the updated Plan
        When The user adds a new shipping and billing address on the New Order page
        Then The user processes the payment using a "valid" credit card
        When The user clicks the "Back To User" button on the New Order page
        Then The user sees the Recent Orders page
        When The user clicks the "Customer Name" button on the Recent Orders page
        Then The Subscription created reflects the linked Plan details

    Scenario: Restore default test data
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Plans" button from the sidebar menu of the Admin Tool Dashboard
        Then Reverts the changes made to Plans test data

    Scenario: Create New Plan
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Plans" button from the sidebar menu of the Admin Tool Dashboard
        And The user creates a New Plan
        When The user creates a new test user in the Admin Tool
        And The user navigates to the New Order page
# Then The user can search and add the new Offer linked to the new Plan created

