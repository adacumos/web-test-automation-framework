@QA-1966 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - Special Offer - New Year Packages - Selects All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Trial Pack Special Offers and Upgrades to All Funnel Offer
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "TRIAL PACK" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Holiday Fat Loss Stack Special Offers and Upgrades to All Funnel Offer
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "HOLIDAY FAT LOSS STACK" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email

    @mobileView
    Scenario: Ultimate Burn Special Offers and Upgrades to All Funnel Offer
        Given The user Resizes the browser to "Samsung S10"
        And The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
