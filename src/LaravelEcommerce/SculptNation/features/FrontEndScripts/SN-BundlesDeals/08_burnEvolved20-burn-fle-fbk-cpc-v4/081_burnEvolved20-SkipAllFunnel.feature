@QA-1937 @lePageMove @leLong @frontend @FE-sprint-5
Feature: LE Move Landing page - Burn Evolved 2.0 New Page Layout - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select Bottle Subscription Package and Skip All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Subscribe Now" button
        Then The user fills in the fields on the Checkout page and places the order
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "subscribeBottle-skipAllFunnels"

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "1 Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the Checkout page and places the order
        And The user "Skips All" Funnel Offers
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "oneBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved with FatLoss" CMS Offer page
        When The user choose "6 Bottles" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "sixBottle-skipAllFunnels"
