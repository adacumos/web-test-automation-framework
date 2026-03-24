@survey-ga-green-int @international
Feature: LE Move Landing page - survey-ga - Ripped Skinny
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped Skinny for 90 Days for $57.00" - skipAllFunnels
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
