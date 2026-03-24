@QA-1449 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - Burn Evolved Fatloss Package - Skip All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects bundle "1 Bottle" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects bundle "6 Bottles" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    @mobileView
    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user Resizes the browser to "iPhone12 pro max"
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects bundle "3 Bottles" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
