@selfRefund
Feature: Multi Bottle Self Refund with No Prior Refund
    Background: Load test data
        Given The user loads the LE test data


    Scenario: Self Refund No Prior Refund
        When The user creates a new multi bottle order
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user "creates" a self "refund" with "no prior refund"
        Then The user verifies "multi bottle" self refund with "no prior refund" in the admin tool

