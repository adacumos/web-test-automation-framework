@QA-2541 @QA-2545 @video
Feature: VS Homepage - Video - 20 Minutes to set Metabolism Ablaze
    Background: Load test data
        Given The user loads the LE test data
    @mobileView
    Scenario: VS Homepage Video - Move - Skip All CDP Offer
        Given The user Resizes the browser to "iPhone XR"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "20 Minutes"
        Then Verifies the video loads properly
        Then The user clicks Buy Now button from the product page
        Then The user verifies the Checkout form Order details

    Scenario: VS Homepage Video - Move - Select CDP Bumper Offer
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "20 Minutes"
        Then Verifies the video loads properly
        Then The user clicks Buy Now button from the product page
        Then The user verifies the Checkout form Order details

    @mobileView @levsSmoke
    Scenario: VS Homepage Video - Move - Select CDP Funnel Offer
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "20 Minutes"
        Then Verifies the video loads properly
        Then The user clicks Buy Now button from the product page
        Then The user verifies the Checkout form Order details
        When The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
