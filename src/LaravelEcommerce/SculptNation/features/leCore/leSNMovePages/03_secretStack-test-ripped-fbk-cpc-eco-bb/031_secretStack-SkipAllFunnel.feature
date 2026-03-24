@QA-1450 @leCore @leMove @funnelPages @testBoostRipped @clientPurchase
Feature: LE Move Landing page - Secret Stack - Skips All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Selects Two Bottle Package and Skips All Funnel Offers
        Given The user Resizes the browser to "Tablet"
        And The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Four Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "6 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH BOOST" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
