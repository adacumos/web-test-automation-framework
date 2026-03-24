@Prodution @orange @body-type-quiz @woman @body-type-quiz-orange
Feature: LE Move Landing page - Body Type Quiz - Toned
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Woman VS Survey Body Quiz - Get Toned Select Some Funnel Offers
        Then Connects to LE Orange Production Server
        When The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Female"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
