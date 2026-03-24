@QA-1452 @lePageMove @leShort @frontend @FE-sprint-5
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Select ALL Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Three Bottle Package and Select ALL funnel Offers
        Given The user navigates to "TestBoost-Ripped90F" CMS Offer page
        When The user selects "Three Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user dismisses the "Test Boost Max" offer
        And The User "Declines" the "Test Boost Max" Funnel Offer
        And The User "Subscribes" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-selectAllFunnels"
