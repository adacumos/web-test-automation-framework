@QA-2172 @QA-2173 @QA-2176 @leCore @lePage
Feature: Create supplement orders via Sculptnation landing page with Canadian country and state selected
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Burn Evolved 2.0 order with Canadian country and state selected
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        Then The user clicks "Burn Evolved 2.0" bottle image 1 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Speed Up My Metabolism" button under the "One Bottle" option and checks that the Cart data is correct
        And The user clicks the Proceed to Checkout button
        And The user fills in the fields on the Checkout page and places the order
        Then The user verifies an alert message is displayed

