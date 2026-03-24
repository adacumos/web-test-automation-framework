@Prodution @survey-fl @man @survey-fl-green
Feature: LE Move Landing page - survey-fl - Ripped Skinny
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user starts new Survey FL Funnel for "Man"
        Then The Male user describes self as "I'm skinny fat"
        Then The user clicks 57 button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
