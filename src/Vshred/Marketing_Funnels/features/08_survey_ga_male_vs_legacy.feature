@vsLegacyBeta
Feature: Male survery 4 funnels

    Background: Load test data
        Given The user loads the VS test data

    Scenario: Clean Bulk Bundle Funnel
        Given The user visits the base VShred URL
        And The user clicks on "male" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "lightly active Male" option of the VS quiz
        And The user clicks on "cant get bigger" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "greens" URL
        And The user clicks on "greens upgrade" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "clean bulk bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "clean bundle Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "clean bulk" purchase in VShred Admin Tool


    Scenario: Ripped In 90 Days Funnel - skinny
        Given The user visits the base VShred URL
        And The user clicks on "male" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "lightly active Male" option of the VS quiz
        And The user clicks on "skinny" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burn upgrade" URL
        And The user clicks on "upgrade" button
        Then The user verifies the "burnPM" URLx
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Ripped In 90 Days 57 Bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "burn evolved"
        And The user verifies the existence of "burn PM"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "ripped 57" purchase in VShred Admin Tool

    Scenario: Ripped In 90 Days Funnel - happy
        Given The user visits the base VShred URL
        And The user clicks on "male" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "very active Male" option of the VS quiz
        And The user clicks on "happy" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burn upgrade" URL
        And The user clicks on "upgrade" button
        Then The user verifies the "burnPM" URL
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Ripped In 90 Days Bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "burn evolved"
        And The user verifies the existence of "burn PM"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "ripped bundle 399 order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "ripped" purchase in VShred Admin Tool



    Scenario: Fat Loss Extreme for Him  - no happy
        Given The user visits the base VShred URL
        And The user clicks on "male" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "very active Male" option of the VS quiz
        And The user clicks on "not happy" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burn upgrade" URL
        And The user clicks on "upgrade" button
        Then The user verifies the "burnPM" URL
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Fat Loss Extreme for Him Bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "burn evolved"
        And The user verifies the existence of "burn PM"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "fat him" purchase in VShred Admin Tool
