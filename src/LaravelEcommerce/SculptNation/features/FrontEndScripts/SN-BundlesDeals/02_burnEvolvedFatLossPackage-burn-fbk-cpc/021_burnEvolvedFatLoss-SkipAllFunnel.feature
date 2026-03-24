@QA-1449 @lePageMove @leShort @reTest @frontend @FE-sprint-5
Feature: LE Move Landing page - Burn Evolved Fatloss Package - Skip All Funnel Offer
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        Then The user select "One" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        Then The user select "Six" bottles then Speed up my metabolism
        Then The user fills out the funnel order form
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-skipAllFunnels"
        When The password is reset to default value
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "sixBottle-skipAllFunnels"

    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "BurnEvolved" CMS Offer page
        When The user selects "Three Bottle" package and clicks "Speed Up My Metabolism" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"
