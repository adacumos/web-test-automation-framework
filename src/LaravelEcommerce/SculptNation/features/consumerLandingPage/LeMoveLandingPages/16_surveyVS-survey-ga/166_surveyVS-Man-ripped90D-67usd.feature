@QA-1445
Feature: LE Move Landing page - survey-ga - Ripped in 90 Days
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $67.00" button
        And The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        When The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: Male VS Survey - "Ripped in 90 Days for $67.00" - skipAllFunnels
        Given The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $67.00" button
        And The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        And The user clicks on "VSU upgrade" button
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "selectAllFunnels"
