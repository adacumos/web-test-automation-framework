@QA-1937 @lePageMove @leLong @frontend @FE-sprint-5
Feature: LE Move Landing page - Burn Evolved 2.0 - New Page Layout - Selects Some Funnel OFfers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Select Some Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        When The User Selects "Six Bottle" of "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-SelectedFunnelsOnly"

    Scenario: Select Three Bottle Package and Select Some Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        Then The user fills out the funnel order form
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        When The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "threeBottle-SelectedFunnelsOnly"
