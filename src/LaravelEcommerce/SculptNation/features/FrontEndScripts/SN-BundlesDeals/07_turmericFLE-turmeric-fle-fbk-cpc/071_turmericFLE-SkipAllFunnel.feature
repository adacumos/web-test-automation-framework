@QA-1451 @lePageMove @leShort @reTest @frontend @FE-sprint-9
Feature: LE Move Landing page - Turmeric Black with FatLoss - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Select One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        Then The user select "One" bottles then Burn belly fat faster
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "oneBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Select Three Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"

    Scenario: Select Six Bottle Package and Skips All Funnel Offers
        Given The user navigates to "Turmeric with FatLoss" CMS Offer page
        When The user selects "Six Bottle" package and clicks "BURN BELLY FAT FASTER" button
        Then The user fills out the funnel order form
        When The User "Declines" the "Burn Evolved" Funnel Offer
        Then The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user clears out the session data
        When The user logs into the SculptNation account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "sixBottle-skipAllFunnels"
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "sixBottle-skipAllFunnels"

