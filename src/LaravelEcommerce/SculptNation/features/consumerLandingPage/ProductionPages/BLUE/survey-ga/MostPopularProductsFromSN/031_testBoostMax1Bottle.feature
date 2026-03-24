@Prodution @blue @sn-products-blue
Feature: Create TestBoost Max orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create one bottle order from Most Popular Products page section
        Then Connects to SN Blue Production Server
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        Then The user clicks "Test Boost Max" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Sky Rocket My Manhood" button under the "One Bottle" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "second" upsell page
        And The user selects One-time delivery price check box and clicks Add To Cart on the "third" upsell page
        And The user selects One-time delivery price check box and clicks Add To Cart on the "fourth" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "fifth" upsell page
        Then The user checks "Order Confirmation" email
