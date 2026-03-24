@Prodution @green @snProducts @snProductsGreen
Feature: SN production test - /sp/burn-evolved/burn-fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN production test - sp/burn-evolved/burn-fbk-cpc - 1 bottle
        Given The user navigates to "BurnEvolved" Sculptnation Survey page
        Then The user select the "1" number of bottles by qty then continue to checkout
        Then The user fills out the funnel order form
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User "Declines" the "Burn PM" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
