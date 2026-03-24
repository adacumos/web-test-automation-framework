@QA-2290
Feature: Create Burn Evolved order with PayPal UCP Checkout Form
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Burn Evolved order with Canada country
        When The user navigates to "Burn-Evolved" CMS Offer page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Speed Up My Metabolism" button under the "One Bottle" option and checks that the Cart data is correct
        And The user clicks the Proceed to Checkout button
        Then The user navigates to the "PayPal" checkout form
        And The user fills out the funnel order form
        Then The user verifies an alert message is displayed
