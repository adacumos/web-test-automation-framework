@QA-2172 @QA-2173 @QA-2176 @leCore @lePage

Feature: Create supplement orders via Sculptnation landing page with Canadian country and state
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Collagen order with Canadian country and state selected
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        Then The user clicks "Multi_Collagen" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Add To Cart" button under the "One Tub" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user dismisses the "Burn Evolved" offer
        And The user dismisses the "Burn PM" offer
        And The user dismisses the "Greens" offer
        Given The user logs into the SculptNation account
        Then The user validates the "one bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email


