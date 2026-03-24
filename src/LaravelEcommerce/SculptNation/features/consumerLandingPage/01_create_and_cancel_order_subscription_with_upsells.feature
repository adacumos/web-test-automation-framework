@QA-541 @QA-544 @MD @GIT @landingPages
Feature: Create Order Subscription with upsell via SculptNation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order Subscription with upsell
        Given The user navigates to the SculptNation product landing page
        Then The validates the data on the product landing page
        And The user clicks the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The user clicks the Subscribe Now button under the One Bottle option on the "first" upsell page
        And The user clicks the Subscribe Now button under the One Bottle option on the "second" upsell page
        Given The user logs into the SculptNation account
        Then The user validates the data on the SculptNation Account Orders page for the "three" items bought
        And The user validates the three subscriptions data on the SculptNation Account Subscriptions page
        Then The user cancels the subscription for the first product and validates its cancelled status
