@QA-2335 @leMove @funnelPages @fatLoss @clientPurchase
Feature: LE Move Landing page - /sp/fat-loss-extreme-f
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Female FLE - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The user clicks on "VSU upgrade" button
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEFemaleBundle-SelectAll"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEFemaleBundle-SelectAll"

    Scenario: Female FLE - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEFemaleBundle-SelectSome"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEFemaleBundle-SelectSome"

    Scenario: Female FLE - Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEFemaleBundle-SkipAll"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEFemaleBundle-SkipAll"
