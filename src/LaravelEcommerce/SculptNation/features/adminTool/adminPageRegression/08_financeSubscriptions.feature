@QA-1645 @MD @adminTool
Feature: LE Admin Page Regression - Finance > Subscriptions
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Finance > Subscription pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Subscriptions" menu from the Admin Tool Dashboard
        Then The Finance "Subscriptions" pages are loaded
        When The user captures the "Subscriptions" resource details
        And The user navigates to Subscription's "Users" resource links
        Then The Subscription details are synced with "Users" resource
        And The user navigates to Subscription's "Plans" resource links
        Then The Subscription details are synced with "Plans" resource
