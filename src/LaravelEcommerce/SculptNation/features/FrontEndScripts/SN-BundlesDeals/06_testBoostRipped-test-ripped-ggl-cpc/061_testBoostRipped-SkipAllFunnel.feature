@QA-1452 @lePageMove @leShort @reTest @frontend @FE-sprint-5
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Skips ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "One Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user dismisses the "Test Boost Max" offer
        And The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Selects Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user dismisses the "HGH Boost" offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-skipAllFunnels"

    Scenario: Selects Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoost-Ripped90D" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user dismisses the "Test Boost Max" offer
        And The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"
