
Feature: Create Apple Cider Vinegar orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Adyen Checkout
        Given The user starts on sculpt nation "female fat loss extreme checkout" page
        Then Fills out Adyen Checkout Page

