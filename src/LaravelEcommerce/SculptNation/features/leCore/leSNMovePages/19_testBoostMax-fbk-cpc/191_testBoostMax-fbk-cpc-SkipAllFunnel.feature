@QA-2190 @leCore @leMove @funnelPages @testBoostMax @clientPurchase
Feature: LE Move Landing page - sp/test-boost-max/fbk-cpc - Skips ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The user selects "One Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Bottle Subscription Package and Skips All Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The User "Subscribes" the "Test Boost Max" Funnel Offer
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Selects Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Test Boost Max" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        Then The user checks "Order Confirmation" email
