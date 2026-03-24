@QA-1944 @lePageMove @leLong @frontend @FE-sprint-7
Feature: LE Move Landing page - Test Boost Max BOGO - Select Some of the Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Select Some of the Funnel Offers
        Given The user navigates to "TestBoost Max BOGO" CMS Offer page
        When The user clicks "Add to Cart" from the offer page
        Then The user fills out the funnel order form
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Upgrades" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        When The User Selects "Three Bottle" of "Creatine" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectedFunnelsOnly"
