@QA-2290
Feature: Create Burn PM order with PayPal UCP Checkout Form
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Burn PM order with US country
        When The user navigates to "Burn-PM" CMS Offer page
        Then The user clicks Buy Now button from the product page
        And The user selects One-time delivery price check box under the One Bottle option
        And The user clicks the "Add To Cart" button under the "One Bottle" option and checks that the Cart data is correct
        And The user clicks the Proceed to Checkout button
        Then The user navigates to the "PayPal" checkout form
        And The user fills out the funnel order form
        And The user dismisses the "Burn PM" offer
        And The user dismisses the "Burn PM" offer
        And The user dismisses the "Burn Evolved" offer
        And The user dismisses the "Turmeric Black" offer
        And The user dismisses the "Greens" offer
        When The user logs into the SculptNation account
        Then The user validates the "one bottle" orders on the SculptNation Account Orders page
        And The user checks "Order Confirmation" email
