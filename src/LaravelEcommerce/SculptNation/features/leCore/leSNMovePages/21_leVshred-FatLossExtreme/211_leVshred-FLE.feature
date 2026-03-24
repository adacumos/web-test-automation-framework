@QA-2325 @leMove @funnelPages @fatLoss @clientPurchase
Feature: LE Move Landing page - /programs/fat-loss-extreme"

    Background: Load test data
        Given The user loads the VS test data

    Scenario: FLE - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The user clicks on "VSU upgrade" button
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEBundle-AllYes"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEBundle-AllYes"

    Scenario: FLE - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEBundle-SelectedYes"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEBundle-SelectedYes"

    Scenario: FLE - Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes I Want Fat Loss Extreme" button
        And The user fills out the survey order form
        When The User "Selects" the CDP Bumper Offer and submits the order
        Then The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        Then The user verifies the next funnel upsell is "Greens"
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "FLEBundle-AllNo"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "FLEBundle-AllNo"
