@QA-1444
Feature: LE Move Landing page - Platinum Evolved Stack - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Selects Some Funnel Offers
        Given The user navigates to "Burn-PM" CMS Offer page
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
