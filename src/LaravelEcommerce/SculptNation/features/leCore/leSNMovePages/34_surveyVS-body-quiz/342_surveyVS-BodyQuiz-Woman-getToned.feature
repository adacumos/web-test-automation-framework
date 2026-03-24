@leMove @QA-2540 @levsSmoke @uat
Feature: LE Move Landing page - Body Type Quiz - Toned
    Background: Load test data
        Given The user loads the LE test data

    @hotfixes
    Scenario: Woman VS Survey - Get Toned Skip All Funnel Offers
        When The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Female"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Declines" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Woman VS Survey - Get Toned Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Female"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User selects Offer and Fills outs the checkout form
        And The User "Selects" Checkout Upsell Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "selectSomeFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectSomeFunnels"
