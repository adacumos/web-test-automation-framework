@QA-1937 @lePageMove @leLong @frontend @FE-sprint-5
Feature: LE Move Landing page - Burn Evolved 2.0 - New Page Layout - Selects All Funnel OFfers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select Bottle Subscription Package and Select All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Subscribe Now" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "subscribeBottle-SelectAllFunnels"
