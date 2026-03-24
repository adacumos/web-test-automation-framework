@QA-2161 @leMove @funnelPages @cdp @clientPurchase
Feature: All Upsell-Yes LE Move CDP Page

    Background: Load test data
        Given The user loads the VS test data

    Scenario: All Upsell-Yes LE Move CDP Page - Diet and Training Plan with VSU Free Trail
        Given The user navigates to V Shred Survey page
        And The user selects the "yes CDP" button
        And The user selects the "diet and training plan" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn-Evolved"
        And The User "Upgrades" the "Burn-Evolved" Funnel Offer
        And The User "Upgrades" the "Burn Accelerator" Funnel Offer
        And The user selects the "claim membership offer" button
        And The user selects the "get my greens" button
        Then The user checks "Order Confirmation" email

    Scenario: All Upsell-Yes LE Move CDP Page - Diet and Training Plan with VSU Membership
        Given The user navigates to V Shred Survey page
        And The user selects the "yes CDP" button
        And The user selects the "diet and training plan" button
        And The user fills out the survey order form
        When The User "Declines" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "Burn-Evolved"
        And The User "Upgrades" the "Burn-Evolved" Funnel Offer
        And The User "Upgrades" the "Burn Accelerator" Funnel Offer
        And The user selects the "claim annual pass" button
        And The user selects the "get my greens" button
        Then The user checks "Order Confirmation" email
