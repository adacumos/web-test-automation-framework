@vsBeta @smoke @QA-2520 @adminTool
Feature: User creation, creates order, waits 2 minutes, adds custome diet plan to the same order
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Admin" user
        When The user creates a new "Member" user

    Scenario: Validates user can merge orders in the admin tool
        Then The user clicks the New Order button on the User Information page
        Then The user searches for "Custom Training and Diet Plan - 12 Weeks" and adds offer
        Then The user adds shipping and billing address
        Then The user places the order and waits 2 minutes for the database to update
        Then The user adds "TURMERIC" plan, subscribes and submits
