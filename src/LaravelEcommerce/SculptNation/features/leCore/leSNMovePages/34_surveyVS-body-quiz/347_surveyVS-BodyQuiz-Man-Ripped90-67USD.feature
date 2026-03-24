@leMove @QA-2540 @uat
Feature: LE Move Landing page - Body Type Quiz - FatLoss
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Man VS Survey - Ripped in 90 Days for $67.00 Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Male"
        When The User describes self as "I'm happy with my body, but"
        Then The User selects Offer and Fills outs the checkout form
        When The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Man VS Survey - Ripped in 90 Days for $67.00 Select Some Funnel Offers
        Given The user Resizes the browser to "Samsung S24"
        And The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Male"
        When The User describes self as "I'm happy with my body, but"
        Then The User selects Offer and Fills outs the checkout form
        When The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Given The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
