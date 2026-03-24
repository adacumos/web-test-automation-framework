@selfRefund
Feature: Bundle Self Refund - With Prior Refund On This Order
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Self Refund, With Prior Refund On This Order
        When The user creates a new bundle order
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user "creates" a self "refund" with "no prior refund"
        And The user "creates" a self "refund" with "prior refund on this order"
        Then The user verifies "bundle" self refund with "prior refund on this order" in the admin tool
