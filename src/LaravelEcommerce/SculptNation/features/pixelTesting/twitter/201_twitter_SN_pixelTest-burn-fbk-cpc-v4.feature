@QA-2672
Feature: Sculptnation Twitter Pixel Event Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN Google Tag - FLE burn-fle-fbk-cpc-v4
        Given The user navigates to "BurnEvolved with FatLoss" Sculptnation Survey page
        When The user choose "1 Bottle" package and clicks "Subscribe Now" button
        And The user verifies the Checkout form Order details
        And The User verifies "Internal" "Twitter" tag for "SN Checkout" event is initiated
        When The user fills out the funnel order form
        And The User verifies "Internal" "Twitter" tag for "SN Purchase" event is initiated
        And The User "Upgrades" the "Burn PM" Funnel Offer
        And Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "Twitter" tag for "SN Upsell" event is initiated
