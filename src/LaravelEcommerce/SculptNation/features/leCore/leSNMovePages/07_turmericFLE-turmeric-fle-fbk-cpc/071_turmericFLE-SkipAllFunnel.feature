@QA-1451 @leCore @leMove @funnelPages @turmeric @clientPurchase
Feature: LE Move Landing page - Turmeric Black with FatLoss - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "One Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    @mobileView
    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user Resizes the browser to "iPad 10"
        And The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Six Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
