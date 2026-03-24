@Prodution @orange @survey-ga @man @survey-ga-orange
Feature: LE Move Landing page - survey-ga - Ripped in 90 Days
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - skipAllFunnels

        Given The user navigates to "Survey GA" Sculptnation Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $67.00" button
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
