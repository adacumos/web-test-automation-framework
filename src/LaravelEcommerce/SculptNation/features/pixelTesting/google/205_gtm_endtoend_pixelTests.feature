@QA-2668 @QA-2604 @pixelTests @gtm
Feature: LE-VS GTM Event Pixel Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - survey-ga
        When The user navigates to V Shred Survey page with endpoint "survey-ga"
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
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk - survey-ga
        When The user navigates to V Shred Survey page with endpoint "survey-ga"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "VSU"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - survey-ga#
        When The user navigates to V Shred Survey page with endpoint "survey-ga#"
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
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk - survey-ga#
        When The user navigates to V Shred Survey page with endpoint "survey-ga#"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "VSU"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - aka1
        When The user navigates to V Shred Survey page with endpoint "aka1"
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
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk - aka1
        When The user navigates to V Shred Survey page with endpoint "aka1"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify GTM event: "Add To Cart" exist
        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "VSU"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - bodytypequiz
        When The user navigates to V Shred Survey page with endpoint "bodytypequiz"
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
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated

    Scenario: LE-VS Survey and Purchase Google Tag Pixel Testing - bodytypequiz
        When The user navigates to V Shred Survey page with endpoint "bodytypequiz"
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
        And The User "Declines" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "GTM" tag for "VS Purchase" event is initiated
        When The User Selects "One Bottle" of "Burn Evolved" Funnel Offer
        Then The user verifies the next funnel upsell is "Burn 3B"
        Then Verify GTM event: "Purchase" exist
        And The User verifies "Internal" "GTM" tag for "VS Upsell" event is initiated
