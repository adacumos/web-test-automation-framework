@QA-923-2 @leCore @lePage
Feature: Create Pre-Workout orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Pre-Workout subscription order on Keira Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user verifies that "Kiera" image exists
        And The user clicks "Pre Favorite" bottle image 1 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user dismisses the "BCASS" offer
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "subscription" orders on the SculptNation Account Orders page
        And The user validates the subscription orders on the SculptNation Account Subscriptions page
        And The user checks "Order Confirmation" email

    Scenario: Create Pre-Workout one bottle order on Keira Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user verifies that "Kiera" image exists
        And The user clicks "Pre Favorite" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user dismisses the "PRE WORkOUT" offer
        And The user dismisses the "PRE WORkOUT" offer
        And The user dismisses the "BCASS" offer
        And The user selects One-time delivery price check box and clicks Add To Cart on the "fourth" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "fifth" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "one bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create Pre-Workout six bottle order on Keira Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user verifies that "Kiera" image exists
        And The user clicks "Pre Favorite" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Six Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user dismisses the "BCASS" offer
        And The user clicks the "Add To Cart" button under the "Six Bottles" option on the "second" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "third" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "six bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email

    Scenario: Create Pre-Workout three bottle order on Keira Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user verifies that "Kiera" image exists
        And The user clicks "Pre Favorite" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "Three Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user dismisses the "PRE WORKOUT" offer
        And The user dismisses the "PRE WORKOUT" offer
        And The user dismisses the "BCASS" offer
        And The user clicks the "Add To Cart" button under the "Three Bottles" option on the "fourth" upsell page
        And The user clicks the "Yes! Upgrade My Order" button on the "fifth" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the "three bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email
