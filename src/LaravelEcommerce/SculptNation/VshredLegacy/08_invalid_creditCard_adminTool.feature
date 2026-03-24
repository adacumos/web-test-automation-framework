@vsBeta @smoke @QA-2524 @adminTool
Feature: User creation, creates order, adds offer, enters an invalid credit card and attempts to submit in Admin Tool
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Admin" user
        When The user creates a new "Member" user

    Scenario: Validates user cannot place an order with an invalid credit card
        Then The user clicks the New Order button on the User Information page
        Then The user searches for "Burn Evolved 2.0" and adds offer
        Then The user enters an invalid credit card
