@vsBeta @smoke @QA-2525 @adminTool
Feature: User creation, creates order, adds custom training plan offer, orders, search for user and deletion in Admin Tool
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Admin" user
        When The user creates a new "Member" user

    Scenario: Create a new test user and places an offer with a physical product
        Then The user clicks the New Order button on the User Information page
        Then The user searches for "Burn Evolved 2.0" and adds offer
        Then The user adds shipping and billing address
        Then The user places the order
