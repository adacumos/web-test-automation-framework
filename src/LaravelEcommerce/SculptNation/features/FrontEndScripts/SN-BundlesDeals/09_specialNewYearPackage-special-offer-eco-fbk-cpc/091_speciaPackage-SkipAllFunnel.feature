@QA-1966 @lePageMove @leLong @frontend @sprint1q4
Feature: LE Move Landing page - Special Offer - New Year Packages - Skips All Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Trial Pack Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "TRIAL PACK" Special Offer and clicks "Buy Now" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "trialPack-skipAllFunnels"
        Then The password is reset to default value
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "trialPack-skipAllFunnels"

    Scenario: Holiday Fat Loss Stack Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "HOLIDAY FAT LOSS STACK" Special Offer and clicks "Buy Now" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "holidayFle-skipAllFunnels"

    Scenario: Ultimate Burn Special Offers and Skip All Funnels
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        Then The user selects the buy now button for ULTIMATE BURN on the page
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The user "Skips All" Funnel Offers
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "ultimateBurn-skipAllFunnels"
