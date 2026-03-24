@QA-1966 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - Special Offer - New Year Packages - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Trial Pack Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "TRIAL PACK" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Holiday Fat Loss Stack Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "HOLIDAY FAT LOSS STACK" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Ultimate Burn Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
