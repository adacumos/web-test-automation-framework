@salesTax
Feature: Salestax order verification from LE with New York state address
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify Sales Tax on orders created with New York state address
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        And The user clicks "Burn PM" bottle image 2 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the order form
        Then The user verifies the sales tax on "LE" is correct
        Then The user fills in the payment details and places the order
        And The user dismisses the "Upsell" offer
        And The user dismisses the "Upsell" offer
        And The user dismisses the "Upsell" offer
        And The user dismisses the "Upsell" offer
        And The user dismisses the "Upsell" offer
        Then The user verifies the Sales Tax on "LE"
        Then The user verifies Sales Tax email contents
