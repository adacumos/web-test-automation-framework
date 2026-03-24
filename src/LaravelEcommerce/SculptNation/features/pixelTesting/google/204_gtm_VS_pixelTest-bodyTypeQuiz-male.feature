@QA-2668 @pixelTests @gtm
Feature: LE-VS GTM Event Pixel Testing - Body Type Quiz
    Background: Load test data
        Given The user loads the LE test data

    Scenario: GTM LE-VS Body Type Quiz - Male Clean Bulk
        When The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Male"
        And The User describes self as "I can't get bigger or gain muscle"
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
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: GTM LE-VS Body Type Quiz - Male Get Ripped
        When The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Man"
        And The User describes self as "I'm happy with my body, but"
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
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
