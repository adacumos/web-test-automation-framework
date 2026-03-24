@Production @survey-fl @woman @survey-fl-orange
Feature: LE Move Landing page - survey-fl - Toned
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        Then Connects to SN Orange Production Server
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user starts new Survey FL Funnel for "Woman"
        When The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
