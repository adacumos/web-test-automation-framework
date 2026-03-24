@QA-2345 @leMove @funnelPages @recipeGuide
Feature: LE Move Landing page - sp/recipe-guide
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Recipe Guide - Skip All Funnel Offers
        Given The user navigates to V Shred Survey page
        When The user clicks "Purchase Recipe Guide" button
        Then The user fills out the funnel order form
        And The Orders are sync in the Admin Tool - "skipAllFunnels"

# removed funnel pages per current Staging
# Scenario: Recipe Guide - Select All Funnel Offers
#     Given The user navigates to V Shred Survey page
#     When The user clicks "Purchase Recipe Guide" button
#     Then The user fills out the funnel order form
#     When The User "Upgrades" the "Turmeric Black" Funnel Offer
#     And The User Selects "Six Bottle" of "Burn Evolved" Funnel Offer
#     And The User Selects "Three Bottle" of "Burn PM" Funnel Offer
#     And The User "Upgrades" the "Greens" Funnel Offer
#     Then The user checks "Order Confirmation" email
#     When The user logs into the Vshred Admin Tool as "Admin" user
#     Then The client purchases are sync in VS admin tool - "selectAllFunnels"
#     And The Orders are sync in the Admin Tool - "selectAllFunnels"
