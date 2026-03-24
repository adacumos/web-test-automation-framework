@QA-2575 @klaviyoEvents
Feature: VS Homepage - Video - 3 Hormones Killing Metabolism Sales Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: KlaviyoEvent - VS Video: CDP Funnel
        Given The user navigates to VShred landing page
        When The user scrolls to the Video container page section
        And The user clicks the video image "Shedding Fat"
        Then Verifies the video loads properly
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user verifies the Checkout form Order details
        When The user fills out the survey order form
        And The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 6B @50%OFF" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The user clicks on "VSU upgrade" button
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        # Then The User verifies the Order Summary - "skipAllCdpOffer"
        # And Verifies CDP Questionnaire button is "Not Visible"
        Then The user checks "Order Confirmation" email
        Then Verify Profile Event "Ordered Product" is logged in Klaviyo
