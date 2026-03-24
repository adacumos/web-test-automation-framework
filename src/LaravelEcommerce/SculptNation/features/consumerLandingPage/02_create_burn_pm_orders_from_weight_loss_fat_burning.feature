@QA-720 @MD @landingPages
Feature: Create Burn PM orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create subscription order from Weight Loss and Fat Burning page section
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        Then The user clicks "Burn PM" bottle image 2 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "subscription" orders on the SculptNation Account Orders page
        And The user validates the subscription orders on the SculptNation Account Subscriptions page
        And The user checks "Order Confirmation" email

    Scenario: Create one bottle order from Weight Loss and Fat Burning page section
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        And The user clicks "Burn PM" bottle image 2 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user selects One-time delivery price check box and clicks Speed Up My Metabolism on the "second" upsell page
        And The user selects One-time delivery price check box and clicks Add To Cart on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "one bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create six bottle order from Weight Loss and Fat Burning page section
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        And The user clicks "Burn PM" bottle image 2 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Six Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Speed Up My Metabolism" button under the "Six Bottles" option on the "first" upsell page
        And The user clicks the "Add To Cart" button under the "Six Bottles" option on the "second" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "six bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create three bottle order from Weight Loss and Fat Burning page section
        Given The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        And The user clicks "Burn PM" bottle image 2 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user clicks the "Speed Up My Metabolism" button under the "Three Bottles" option on the "second" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "three bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email
