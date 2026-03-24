@QA-1451 @leCore @leMove @funnelPages @turmeric @clientPurchase
Feature: LE Move Landing page - Turmeric Black with FatLoss - Select Some Funnels
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "One Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        When The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email

    Scenario: Select Six Bottle Package and Selects Some Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Six Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
