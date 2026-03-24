@QA-2668 @pixelTests @gtm
Feature: LE-VS GTM Event Pixel Testing - Body Type Quiz
    Background: Load test data
        Given The user loads the LE test data

    Scenario: GTM LE-VS Body Type Quiz - Female FatLoss
        When The user navigates to V Shred Survey page
        And The user starts new Body Type Survey for "Female"
        And The User describes self as "I have 20 lbs or more fat"
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

    Scenario: GTM LE-VS Body Type Quiz - Female Toned
        When The user navigates to V Shred Survey page
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Initiate Checkout" exist
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "Three Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated
