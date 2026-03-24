@QA-1444
Feature: LE Move Landing page - Platinum Evolved Stack - Select ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Selects All Funnel Offers
        Given The user navigates to "Burn-PM" CMS Offer page
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email
