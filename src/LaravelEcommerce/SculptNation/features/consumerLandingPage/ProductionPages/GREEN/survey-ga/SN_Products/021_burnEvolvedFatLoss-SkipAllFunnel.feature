@Prodution @green @sn-products-green
Feature: LE Move Landing page - Burn Evolved Fatloss Package - Skip All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects bundle "1 Bottle" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email

