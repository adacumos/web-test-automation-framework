@Prodution @orange @survey-ga @woman @survey-ga-orange
Feature: LE Move Landing page - survey-ga - Woman Fat Loss
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Fat Loss for Her - Skips All Funnels

        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
