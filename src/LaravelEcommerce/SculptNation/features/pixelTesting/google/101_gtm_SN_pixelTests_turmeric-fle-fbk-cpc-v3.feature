@QA-2668 @QA-2599 @pixelTests @gtm
Feature: Sculptnation GTM Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Google Tag - Turmeric Black fle-fbk-cpc-v3
        Given The user navigates to "Turmeric with FatLoss V3" Sculptnation Survey page
        When The user selects "Three Bottle" package and clicks "BURN BELLY FAT FASTER" button
        And The user verifies the Checkout form Order details
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "SN Checkout" event is initiated
        Then The user fills out the funnel order form
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Kendago" "GTM" tag for "SN Purchase" event is initiated
        Then The User verifies "Internal" "GTM" tag for "SN Purchase" event is initiated
        When The User "Upgrades" the "Turmeric Black" Funnel Offer
        Then Verify GTM event: "Purchase" exist
        And Verify GTM event: "Add To Cart" exist
        And Verify GTM event: "View Offer" exist
        And The User verifies "Kendago" "GTM" tag for "SN Purchase" event is initiated
        Then The User verifies "Internal" "GTM" tag for "SN Purchase" event is initiated
