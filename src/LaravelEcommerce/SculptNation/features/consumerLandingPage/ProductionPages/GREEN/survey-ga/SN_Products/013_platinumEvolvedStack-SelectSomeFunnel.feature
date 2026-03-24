@Prodution @green @sn-products-green
Feature: LE Move Landing page - Platinum Evolved Stack - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create Order and Selects Some Funnel Offers
        Given The user navigates to "Burn-PM" CMS Offer page
        When The user clicks "Buy Now" from the offer page
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        Then The user checks "Order Confirmation" email
