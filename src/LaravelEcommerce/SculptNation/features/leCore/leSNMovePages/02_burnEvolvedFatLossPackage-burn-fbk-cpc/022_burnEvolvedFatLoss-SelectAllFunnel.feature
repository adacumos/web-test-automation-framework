@QA-1449 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - Burn Evolved Fatloss Package - 1 Bottle Select All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Select One Bottle Package and Selects All Funnel Offers
        Given The user Resizes the browser to "iPhone XR"
        And The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Select Six Bottle Package and Selects All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Select Three Bottle Package and Selects All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Selects All" Funnel Offers
        Then The user checks "Order Confirmation" email
