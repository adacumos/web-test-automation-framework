@QA-1453 @lePageMove @leShort @reTest @frontend @FE-sprint-7
Feature: LE Move Landing page - Turmeric Black with FatLoss V3 - Skip All Funnel
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss V3" CMS Offer page
        Then The user select "One" bottles then Burn belly fat faster
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss V3" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss V3" CMS Offer page
        When The user selects "Six Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-skipAllFunnels"
