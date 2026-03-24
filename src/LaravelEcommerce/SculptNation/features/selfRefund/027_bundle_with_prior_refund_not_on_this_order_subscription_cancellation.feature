@selfRefund
Feature: Self Refund with prior refund not on this order with subscription cancellation
    Background: Load test data
        Given The user loads the LE test data


    Scenario: Self Refund With Prior Refund Not On This Order
        When The user creates a new bundle subscription
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user creates a "bundle" refund with "no prior refund" with subscription "cancellation"
        When The user creates a second bundle subscription
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user creates a "bundle" refund with "prior refund not on this order" with subscription "cancellation"
        Then The user verifies "bundle" self refund with "prior refund not on this order" in the admin tool
        And The user verifies the subscription status in the admin tool
