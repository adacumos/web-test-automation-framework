@QA-1455 @leCore @leMove @funnelPages @fatLoss @clientPurchase
Feature: LE Move Landing page - Secret Stack - NO Shaker - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    @mobileView
    Scenario: Selects One Bottle Package and Skips All Funnel Offers
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "1 Bottle" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Two Bottles Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Selects Three Bottles Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "3 Bottles" package and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
