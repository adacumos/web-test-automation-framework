@QA-1449 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - Burn Evolved Fatloss Package - 1 Bottle Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email

    @mobileView
    Scenario: Select Six Bottle Package and Selects Some Funnel Offers
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Select Three Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user Opts in to select Funnel Offers
        Then The user checks "Order Confirmation" email
