@QA-2668 @QA-2604 @pixelTests @gtm @surveygaHashPixel
Feature: LE-VS GTM Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - female - get toned
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Initiate Checkout" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - female - soft
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Initiate Checkout" exist
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - male - skinny fat
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm skinny fat"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Initiate Checkout" exist
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - male - clean bulk
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Initiate Checkout" exist
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated
