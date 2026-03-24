@vsBeta
Feature: Upsell Physical Product Order

    Background: Load test data
        Given The user loads the LE test data

    Scenario: Upsell Physical Product Order
        Given The user visits the legacy VShred Fatloss Extreme for "him" URL
        Then The user clicks the legacy Fatloss Extreme buy button
        When The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        Then The user clicks on "VSU upgrade" button
        And The user dismisses the "CDP" offer with link
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user verifies Thank You Page and goes to the Order Confirmation Page
        And The user is on the profile page and clicks on the purchases link
        And The User verifies the Order Summary
