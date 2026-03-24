@QA-1267 @leCore @lePage
Feature: Create Collagen orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create one tub order from Most Popular Products page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        Then The user clicks "Multi_Collagen" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "One Tub" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        And The user clicks Add To Cart on the upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "one bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create six tubs order from Most Popular Products page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "Multi_Collagen" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Six Tub" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Speed Up My Metabolism" button under the "Six Bottles" option on the "first" upsell page
        And The user clicks the "Add To Cart" button under the "Six Bottles" option on the "second" upsell page
        And The user clicks Add To Cart on the upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "six bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create three bottle order from Most Popular Products page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "Multi_Collagen" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Three Tub" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Speed Up My Metabolism" button under the "Three Bottles" option on the "first" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "second" upsell page
        And The user clicks Add To Cart on the upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "three bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email
