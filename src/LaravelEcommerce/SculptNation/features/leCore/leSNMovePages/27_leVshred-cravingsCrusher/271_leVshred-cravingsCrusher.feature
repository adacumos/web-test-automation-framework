@QA-2366 @leMove @clientPurchase
Feature: LE Move Landing page - sp/oops/oops

    Background: Load test data
        Given The user loads the VS test data

    Scenario: CravingsCrusher - Select All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Get This Deal Now" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The User "Upgrades" the "VSU" Funnel Offer
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Upgrades" the "Custom Diet Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens Bundle" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SelectAllFunnel"
    # When The user logs into the Vshred Admin Tool as "Admin" user
    # Then The client purchases are sync in VS admin tool - "SelectAllFunnel"

    @mobileView
    Scenario: CravingsCrusher - Select Some Funnel Offers
        Given The user Resizes the browser to "iPhone 15"
        And The user navigates to V Shred Survey page
        When The user clicks "Get This Deal Now" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Upgrades" the "Greens Bundle" Funnel Offer
        Then The user checks "Order Confirmation" email
        And The user Resizes the browser to desktop view
        Then The Orders are sync in the Admin Tool - "SelectSomeFunnel"
    # When The user logs into the Vshred Admin Tool as "Admin" user
    # Then The client purchases are sync in VS admin tool - "SelectSomeFunnel"

    Scenario: CravingsCrusher - Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Get This Deal Now" button
        Then The user fills out the funnel order form
        And The user verifies the next funnel upsell is "Burn Evolved"
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The user verifies the next funnel upsell is "VSU"
        And The User "Declines" the "VSU" Funnel Offer
        And The user verifies the next funnel upsell is "Custom Diet Plan"
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The user verifies the next funnel upsell is "Greens"
        And The User "Declines" the "Greens Bundle" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "SkipAllFunnel"
# When The user logs into the Vshred Admin Tool as "Admin" user
# Then The client purchases are sync in VS admin tool - "SkipAllFunnel"
