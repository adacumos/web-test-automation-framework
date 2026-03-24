@Prodution
Feature: SN production test - /sp/test-boost-max/test-ripped-fbk-cpc-eco-bb
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN production test - /sp/test-boost-max/test-ripped-fbk-cpc-eco-bb - 1 bottle
        Given The user navigates to "TestBoostMax" Sculptnation Survey page
        Then The user clicks the "1" Buy Now button on the page
        Then The user fills out the funnel order form
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        Then The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
