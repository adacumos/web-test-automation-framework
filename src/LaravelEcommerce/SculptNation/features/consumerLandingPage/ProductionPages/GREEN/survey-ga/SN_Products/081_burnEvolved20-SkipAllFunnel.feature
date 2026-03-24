@Prodution @green @sn-products-green
Feature: LE Move Landing page - Burn Evolved 2.0 New Page Layout - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select Bottle Subscription Package and Skip All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Subscribe Now" button
        Then The user fills out the funnel order form
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
