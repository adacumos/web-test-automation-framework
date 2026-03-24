@QA-2701 @klaviyoEvents
Feature: Klaviyo Events - LE Legacy Refund - Physical Subscription
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Refund Physical Subscription - LE Legacy
        Given The user navigates to the SculptNation homepage
        When The user browses to "Bundle & Save" section of the landing page
        Then The user clicks "Muscle Building" bottle image 1 on the landing page
        And The user clicks Buy Now button from the product page
        And The user selects the Subscribe Now button under the One Bottle option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        And The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "Test Boost Max" Funnel Offer
        When The User Selects "One Bottle" of "HGH Boost" Funnel Offer
        And The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user checks "Order Confirmation" email
        When The user logs into the Admin Tool using an account with "admin" credentials
        And The user searches the "dynamic" test email
        When The user Fully Refunds a purchased item - "Creatine" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo

