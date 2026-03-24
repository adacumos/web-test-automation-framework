@QA-1314
Feature: Create an order with the new checkout form
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order Using The New Checkout Form
        Given The user navigates to the SculptNation product landing page
        Then The validates the data on the product landing page
        And The user clicks the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        # Then The user fills in the fields on the new Checkout page and places the order
        Then The user navigates to the "Checkout V3" checkout form
        And The user fills out the funnel order form
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the data on the SculptNation Account Orders page for the "three" items bought
