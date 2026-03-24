@QA-2672 @pixelTests @twitter @surveygaHashPixel
Feature: LE-VS Twitter Pixel Event Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Twitter Pixel Testing - female - get toned
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: LE-VS Survey and Purchase Twitter Pixel Testing - male - skinny fat
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        Then The Male user describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated
