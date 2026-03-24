@QA-1987 @leCore @leMove @funnelPages @burnEvolved @clientPurchase
Feature: LE Move Landing page - LE Survey Burn Evolved - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Respond to Women Survey and Purchase a Bottle then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects bundle "1 Bottle" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Respond to Men Survey and Purchase Six Bottles then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Men"
        Then The user watches the Product Presentation
        When The user selects bundle "6 Bottles" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Respond to Women Survey and Purchase Three Bottles then Skips All Funnel Offers
        Given The user navigates to "Burn Evolved" Sculptnation Survey page
        When The user starts Sculptnation survey for "Women"
        Then The user watches the Product Presentation
        When The user selects bundle "3 Bottles" and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The user clicks the "Declines" button on the "first" upsell page
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
