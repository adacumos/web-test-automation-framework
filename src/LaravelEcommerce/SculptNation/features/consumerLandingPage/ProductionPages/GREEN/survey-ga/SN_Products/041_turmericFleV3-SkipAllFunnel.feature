@Prodution @green @sn-products-green
Feature: LE Move Landing page - Turmeric Black with FatLoss V3 - Skip All Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss V3" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
