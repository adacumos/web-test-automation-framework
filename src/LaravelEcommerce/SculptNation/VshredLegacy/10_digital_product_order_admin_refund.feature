@Todo @QA-2526 @adminTool
Feature: User creation, creates order, adds custom training plan offer, orders, refunds the order
    Background: Load test data
        Given The user loads the LE test data
        When The user logs into the Vshred Admin Tool as "Admin" user
        When The user creates a new "Member" user

    Scenario: Create a new test user, make a purchase and refund the order
        Then The user clicks the New Order button on the User Information page
        Then The user searches for "Fat Loss Extreme for Him" and adds offer
        Then The user adds shipping and billing address
        Then The user places the order
        Then The user collects the Transaction Reference from the Payments tab and settles the payment for the order
        Then The user clicks the "Refund" button
        When When The refund modal opens the user will process a full refund
# TODO: Get working in cloud.
# Given The user continues to BrainTree     ---------> Commenting it out for future use. Unstable now
# Then The user searches for transaction reference email
# And The user verifies that the refund was successful
