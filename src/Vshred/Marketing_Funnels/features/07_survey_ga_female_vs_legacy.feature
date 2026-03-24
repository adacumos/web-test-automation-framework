@vsLegacyBeta
Feature: Female survery 3 funnels

    Background: Load test data
        Given The user loads the VS test data

    Scenario: Toned In 90 Days Funnel
        Given The user visits the base VShred URL
        And The user clicks on "female" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 40" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "lightly active Female" option of the VS quiz
        And The user clicks on "soft" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burnPM" URL
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Toned In 90 Days bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "burn evolved"
        And The user verifies the existence of "burn PM"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Toned Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "toned" purchase in VShred Admin Tool


    Scenario: Fat Loss Extreme for Her Funnel
        Given The user visits the base VShred URL
        And The user clicks on "female" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 30" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "moderately active Female" option of the VS quiz
        And The user clicks on "fat" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burnPM" URL
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Fat Loss Extreme for Her bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Fat Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "fat her" purchase in VShred Admin Tool

    Scenario: Toned In 90 Days Funne - Skinny
        Given The user visits the base VShred URL
        And The user clicks on "female" option of the VS quiz
        Then The user verifies the URL after male selection
        And The user clicks on "age 20" option of the VS quiz
        Then The user verifies the URL after age 40 selection
        And The user moves the height slider
        And The user clicks on height continue button
        And The user moves the weight slider
        And The user clicks on weight continue button
        And The user clicks on "very active Female" option of the VS quiz
        And The user clicks on "thin" option of the VS quiz
        And The user clicks the Everything for just $57 button
        And The user Fills out the Order Form with upsell and submits the order
        Then The user verifies the "burn" URL
        And The user clicks on "subscribe now" button
        And The user fills out the supplement order shipping form
        Then The user verifies the "burnPM" URL
        And The user clicks on "subscribe now" button
        Then The user verifies the "VSU" URL
        And The user clicks on "VSU upgrade" button
        Then The user verifies the "special offer" URL
        And The user clicks on "add to cart" button
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Toned In 90 Days bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "burn evolved"
        And The user verifies the existence of "burn PM"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "greens"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Toned Order total"
        Then The user verifies the "successful order" URL
        And The user verifies the existence of "Toned In 90 Days bundle"
        And The user verifies the existence of "custom diet plan"
        And The user verifies the existence of "VSU"
        And The user verifies the existence of "sales tax"
        And The user verifies the existence of "Toned Order total"
        And The user logs into the VShred Admin Tool using an "admin" account
        And The user verifies the "toned" purchase in VShred Admin Tool
