@QA-2360 @leMove @clientPurchase
Feature: LE Move Landing page - sp/survey/results-female-fl-tkt

    Background: Load test data
        Given The user loads the VS test data

    Scenario: FemaleFatLoss - ThreeBottle - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The user clicks on "VSU upgrade" button
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectAllFunnel"

    Scenario: FemaleFatLoss - ThreeBottle - Select Some Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        Then The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        Then The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectSomeFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SelectSomeFunnel"

    @mobileView
    Scenario: FemaleFatLoss - ThreeBottle - Skip All Funnel Offers
        Given The user Resizes the browser to "iPad 10"
        Given The user navigates to V Shred Survey page
        When The user clicks "Yes! I Want Fat Loss Extreme" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "Burn PM"
        And The User "Declines" the "Burn PM" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "SkipAllFunnel"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "SkipAllFunnel"
