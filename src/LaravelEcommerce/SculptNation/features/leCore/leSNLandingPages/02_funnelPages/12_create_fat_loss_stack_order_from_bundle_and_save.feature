@QA-805 @QA-807 @QA-803 @leCore @lePage @uat
Feature: Create Fat Loss Stack orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create subscription order from Bundle & Save page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Bundle & Save" section of the landing page
        Then The user clicks "Fat Loss Burn 2.0" bottle image 1 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "subscription" orders on the SculptNation Account Orders page
        And The user validates the subscription orders on the SculptNation Account Subscriptions page
        And The user checks "Order Confirmation" email

    @hotfixes
    Scenario: Create three bottle order from Bundle & Save page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Bundle & Save" section of the landing page
        And The user clicks "Fat Loss Burn 2.0" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the "Yes! Upgrade My Order" button on the "first" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "second" upsell page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "three bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email
