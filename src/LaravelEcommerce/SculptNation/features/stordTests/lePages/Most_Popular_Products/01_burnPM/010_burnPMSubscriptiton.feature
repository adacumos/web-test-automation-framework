@shipments
Feature: Create Burn PM orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data
        And The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "Burn PM" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page

    Scenario: Create subscription order from Most Popular Products page section
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
