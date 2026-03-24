@QA-1455 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - NO Shaker - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects One Bottle Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "1 Bottle" package and clicks "Buy Now" button
        Then The user verifies the checkout form type and makes purchase
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "oneBottle-skipAllFunnels"

    Scenario: Selects Two Bottles Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "2 Bottles" package and clicks "Buy Now" button
        Then The user verifies the checkout form type and makes purchase
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "twoBottle-skipAllFunnels"

    Scenario: Selects Three Bottles Package and Skips All Funnel Offers
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "3 Bottles" package and clicks "Buy Now" button
        Then The user verifies the checkout form type and makes purchase
        When The User "Declines" the "HGH Boost" Funnel Offer
        And The User "Declines" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-skipAllFunnels"
        When The password is reset to default value
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "threeBottle-skipAllFunnels"

