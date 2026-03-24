@negative
Feature: LE Move Landing page - survey-ga - Female
    Background: Load test data
        Given The user clears out the session data
        And The user loads the LE test data

    Scenario: Survey page and funnel page reloads
        Given The user Resizes the browser to "iPhone 15"
        When The user navigates to "Survey GA" Sculptnation Survey page
        And The user runs surveyGa page refresh tests for "Woman"
        When The User describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The user reloads the page
        Then The user fills out the survey order form
        When The User "Declines" Checkout Upsell Offer
        When The User "Upgrades" the "Burn Evolved" Funnel Offer
        Then The user reloads the page
        And The user navigates "back"
        Then The User "Declines" the "Burn Evolved" Funnel Offer

    Scenario: Ramdom page Reloads on Survey pages - Get Toned Skinny
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Woman"
        And The User describes self as "I'm skinny. I need to add toned muscle"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        And The user fills out the survey order form
        When The user reloads the page
        Then The user fills out the survey order form
        When The User "Selects" Checkout Upsell Offer

    Scenario: Ramdom page Reloads on Survey pages - Fat Loss for Her
        Given The user Resizes the browser to "Samsung S24"
        Given The user navigates to "Survey GA" Sculptnation Survey page
        When The user runs surveyGa page refresh tests for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The user clicks "Claim Offer Now" button
        And The user fills out the survey order form
        When The user reloads the page
        Then The user fills out the survey order form
        When The User "Selects" Checkout Upsell Offer
