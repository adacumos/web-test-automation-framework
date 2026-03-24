@uat @readonly @FET-931 @FE-sprint-6 @frontend
Feature: Create Apple Cider Vinegar orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify acv page on prod
        Given The user starts on sculpt nation "acv prod" page
        Then The user select Choose your package
        Then The user verifies they are on the checkout page with "/sn-checkout" in the url
