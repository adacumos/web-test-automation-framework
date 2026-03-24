@QA-2701 @klaviyoEvents
Feature: Klaviyo Events - LE Legacy Partial Refund - Physical Orders
    Background: Load test data
        Given The user loads the LE test data
        And Klaviyo Profile events are monitored

    Scenario: Partial Refund Physical Order - LE Legacy
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "HGH Boost" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        When The User Selects "Six Bottle" of "HGH Boost" Funnel Offer
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Pre Workout" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeOffer"
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
        When The user Partially Refunds the purchased item - "HGH Boost" in LE Admin
        Then Verify Profile Event "Order Refunded" is logged in Klaviyo

