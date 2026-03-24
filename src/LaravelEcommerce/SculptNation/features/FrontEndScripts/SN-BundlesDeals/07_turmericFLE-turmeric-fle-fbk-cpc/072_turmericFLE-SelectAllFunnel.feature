@QA-1451 @lePageMove @leShort @frontend @FE-sprint-9
Feature: LE Move Landing page - Turmeric Black with FatLoss - Select ALL Funnels
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select Three Bottle Package and Selects All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        When The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-SelectAllFunnels"
