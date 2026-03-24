@QA-2331 @leMove @clientPurchase
Feature: LE Move Landing page - /sp/move?ref=home

    Background: Load test data
        Given The user loads the VS test data

    Scenario: Move30 - Select All Funnel Offers with Three Bottles
        Given The user navigates to V Shred Survey page
        When The user clicks "Buy Now" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectAllFunnel-ThreeBottles"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectAllFunnel-ThreeBottles"

    Scenario: Move30 - Select All Funnel Offers with Six Bottles
        Given The user navigates to V Shred Survey page
        When The user clicks "Buy Now" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn Evolved"
        And The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
        And The User Selects "Six Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectAllFunnel-SixBottles"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectAllFunnel-SixBottles"
