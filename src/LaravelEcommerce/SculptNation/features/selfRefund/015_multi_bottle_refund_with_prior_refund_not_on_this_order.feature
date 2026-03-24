@selfRefund
Feature: Multi Bottle Self Refund with Prior Refund Not On This Order
    Background: Load test data
        Given The user loads the LE test data


    Scenario: Self Refund With Prior Refund Not On This Order
        When The user creates a new one bottle order
        Given The user logs into the SculptNation account
        When The user settles the payment
        Then The user "creates" a self "refund" with "no prior refund"

        When The user creates a second multi bottle order
        Given The user logs into the SculptNation account
        When The user settles the payment
        And The user "creates" a self "refund" with "prior refund not on this order"
        Then The user verifies "multi bottle" self refund with "prior refund not on this order" in the admin tool

