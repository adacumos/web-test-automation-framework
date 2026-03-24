@QA-2668 @QA-2599 @pixelTests @gtm
Feature: Sculptnation GTM Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Google Tag - Ripped fle-fbk-cpc-eco-bb
        Given The user navigates to "TestBoostRipped" Sculptnation Survey page
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        And The user verifies the Checkout form Order details
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "SN Checkout" event is initiated
        When The user fills out the funnel order form
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "SN Purchase" event is initiated
        And The User verifies "Kendago" "GTM" tag for "SN Purchase" event is initiated
        When The User "Upgrades" the "Test Boost Max" Funnel Offer
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "SN Purchase" event is initiated
        And The User verifies "Kendago" "GTM" tag for "SN Purchase" event is initiated
