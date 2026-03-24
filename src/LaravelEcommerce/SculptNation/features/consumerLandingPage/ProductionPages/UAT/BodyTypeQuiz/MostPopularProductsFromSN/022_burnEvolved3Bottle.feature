@newUAT
Feature: Create Burn Evolved 2.0 orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create three bottle order from Most Popular Products page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "Burn Evolved 2.0" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Speed Up My Metabolism" button under the "Three Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "second" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "third" upsell page
        And The user clicks Add To Cart on the upsell page
        Then The user checks "Order Confirmation" email
