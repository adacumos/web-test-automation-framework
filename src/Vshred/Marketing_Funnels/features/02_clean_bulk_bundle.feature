@smoke
Feature: Clean Bulk Bundle

    Background: Load test data
        Given The user loads the VS test data

    Scenario: Clean Bulk Bundle
        Given The user visits the base VShred URL
        And The user clicks on "male" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "moderately active" option of the VS quiz
        And The user clicks on "cant get bigger" option of the VS quiz
        And The user clicks the Everything for just $87 button
        And The user fills out the Order Form and submits the order
        Then The user verifies the URL after submitting order
        And The user declines the upsell
        Then The user verifies the URL after declining upsell
        And The user clicks on "cdp upgrade" button
        Then The user verifies the URL after clicking on upgrade button
        And The user clicks on "add to cart" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "clean bulk bundle"
        And The user verifies the existence of "custom diet clean bulk"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "clean bulk order total"
        And The user verifies the purchased programs in purchases
        And The user verifies the existence of "clean bulk" order email
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "clean bulk" purchase in VShred Admin Tool
        And The user logs into BrainTree
        Then The user validates that the "clean bulk" purchase recorded in BrainTree
