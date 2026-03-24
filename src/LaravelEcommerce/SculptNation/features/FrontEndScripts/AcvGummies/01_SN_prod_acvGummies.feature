@uat @readonly @FET-931 @FE-sprint-6 @frontend
Feature: Create Apple Cider Vinegar orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify acv page on prod
        Given The user starts on sculpt nation "acv prod" page
        Then Validates the data on the acv landing page
        And The user selects One-time delivery price check box and clicks Add To Cart on the "first" upsell page
        Then The user verifies they are on the checkout page with "/cart" in the url
