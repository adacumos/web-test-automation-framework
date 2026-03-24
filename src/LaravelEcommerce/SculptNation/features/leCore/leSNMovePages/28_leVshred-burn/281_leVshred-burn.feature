@QA-2364 @leMove @clientPurchase @frontend @sprint1q4
Feature: LE Move Landing page - sp/burn/burnpm-fle-ggl-shop-bnd-cpc
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Burn - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "add to cart" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Upgrades" the "Enzymes" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectAllFunnel"

    Scenario: Burn - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "add to cart" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectSomeFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectSomeFunnel"

    @mobileView
    Scenario: Burn - Skip All Funnel Offers
        Given The user Resizes the browser to "iPhone XR"
        And The user navigates to V Shred Survey page
        When The user clicks "add to cart" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Enzymes" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "SkipAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SkipAllFunnel"
