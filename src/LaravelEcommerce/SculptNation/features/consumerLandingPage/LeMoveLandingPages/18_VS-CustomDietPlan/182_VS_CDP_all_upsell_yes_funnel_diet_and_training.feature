@QA-2161 @leEnd
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
        Then The Orders are sync in the Admin Tool - "cdp vsu trail training plan"
        Then The Orders are sync in the Admin Tool - "commonBundle"
        Then The Orders are sync in the Admin Tool - "silvePlusCDP"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdp vsu trail training plan"
        Then The client purchases are sync in VS admin tool - "commonBundle"
        Then The client purchases are sync in VS admin tool - "silvePlusCDP"

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
        Then The Orders are sync in the Admin Tool - "cdp vsu membership training plan"
        Then The Orders are sync in the Admin Tool - "commonBundle"
        Then The Orders are sync in the Admin Tool - "silvePlusCDP"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "cdp vsu membership training plan"
        Then The client purchases are sync in VS admin tool - "commonBundle"
        Then The client purchases are sync in VS admin tool - "silvePlusCDP"
