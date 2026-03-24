@Prodution @green @sn-products-green
Feature: LE Move Landing page - Burn Evolved Fatloss Package - 1 Bottle Select All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Selects All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects bundle "3 Bottles" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        Then The user clicks the "Decline" button on the "Second" upsell page
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
