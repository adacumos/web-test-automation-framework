@QA-1966 @lePageMove @leLong @frontend @sprint1q4
Feature: LE Move Landing page - Special Offer - New Year Packages - Selects Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Holiday Fat Loss Stack Special Offers and Selects Some Funnel Offer
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "HOLIDAY FAT LOSS STACK" Special Offer and clicks "Buy Now" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The Orders are sync in the Admin Tool - "holiday-selectSomeFunnels"
        Then The password is reset to default value
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "holiday-selectSomeFunnels"

    Scenario: Trial Pack Special Offers and Selects Some Funnel Offer
        Given The user navigates to "Special New Year VIP Sale" CMS Offer page
        When The user selects the "TRIAL PACK" Special Offer and clicks "Buy Now" button
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "trialPack-selectSomeFunnels"
