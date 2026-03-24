@QA-2701 @klaviyoEvents
Feature: Klaviyo Events - LE Legacy Full Refund - Physical Orders
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Refund Physical Order - LE Legacy
        When The user navigates to the SculptNation homepage
        When The user navigates to "Weight Loss Fat Burning" section of the landing page
        And The user clicks "Burn PM" bottle image 2 on the landing page
        Then The user clicks Buy Now button from the product page
        When The User Selects "One Bottle" of "Burn PM" Funnel Offer
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        When The User "Upgrades" the "Burn PM" Funnel Offer
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        When The User Selects "One Bottle" of "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        When The user Fully Refunds a purchased item - "Turmeric Black" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo
