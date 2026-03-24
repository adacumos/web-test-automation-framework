@QA-1452 @lePageMove @leShort @frontend @FE-sprint-5
Feature: LE Move Landing page - Test Boost Max - Ripped 90Days - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Six Bottle Package and Select some funnel Offers
        Given The user navigates to "TestBoost-Ripped90F" CMS Offer page
        When The user selects "Six Bottle" package and clicks "SKYROCKET MY MANHOOD" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user dismisses the "HGH Boost" offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-selectFunnels"
