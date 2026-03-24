@vsBeta @smoke @QA-2514 @adminTool
Feature: User creates a plan order and then cancels the subscription
    Background: Load test data
        Given The user loads the LE test data
        Given The user logs into the Vshred Admin Tool as "Sales" user
        When The user creates a new "Member" user

    Scenario: Create a new test user and creates a plan order
        Then The user clicks the New Order button on the User Information page
        Then The user searches for plan and adds plan
        Then The user adds shipping and billing address
        Then The user subscribes to the plan
        Then The user logs out of VS Admin Tool
        Then The user logs into the Vshred Admin Tool as "Admin" user
        Then The user searches a client record
        And The user navigates to the "Subscriptions" tab
        Then The user cancels the VS subscription
