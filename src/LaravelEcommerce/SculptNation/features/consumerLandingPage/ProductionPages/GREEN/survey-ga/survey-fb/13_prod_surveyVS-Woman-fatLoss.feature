@Prodution @survey-fl @woman @survey-fl-green
Feature: LE Move Landing page - survey-fl - Woman Fat Loss
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user starts new Survey FL Funnel for "Woman"
        When The Female user describes self as "I have 20 lbs or more fat"
        #Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The user clicks Claim Now
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
