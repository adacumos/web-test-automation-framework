@QA-2575 @klaviyoSmoke
Feature: Klaviyo Events - VS Homepage - Video Container - Shedding Fat While Having Fun
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: VS Homepage Video - Male FLE - Select CDP Funnel Offer
        Given The user Resizes the browser to "iPhone 15"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "20 Minutes"
        Then Verifies the video loads properly
        Then The user clicks Buy Now button from the product page
        Then The user verifies the Checkout form Order details
        When The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "VSU Upgrade" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
