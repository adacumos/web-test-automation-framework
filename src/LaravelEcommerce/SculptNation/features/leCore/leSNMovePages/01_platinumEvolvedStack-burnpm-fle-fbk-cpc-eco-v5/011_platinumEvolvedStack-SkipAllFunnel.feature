@QA-1444
Feature: LE Move Landing page - Platinum Evolved Stack - SKIP All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Skips All Funnel Offers
        Given The user navigates to "BurnPM-FLE" CMS Offer page
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
