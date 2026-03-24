@QA-1944 @lePageMove @leLong @frontend @FE-sprint-7
Feature: LE Move Landing page - Test Boost Max BOGO - Skip All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Skips All Funnel Offers
        Given The user navigates to "TestBoost Max BOGO" CMS Offer page
        When The user clicks "Add to Cart" from the offer page
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
