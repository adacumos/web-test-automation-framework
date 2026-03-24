@selfRefund
Feature: Self Refund No Prior Refund with Subscription Cancellation
    Background: Load test data
        Given The user loads the LE test data


    Scenario: Self Refund No Prior Refund
        When The user creates a new bundle subscription
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user creates a "bundle" refund with "no prior refund" with subscription "cancellation"
        And The user "verifies" a self "refund" with "no prior refund"
        Then The user verifies "bundle" self refund with "no prior refund" in the admin tool
        And The user verifies the subscription status in the admin tool
