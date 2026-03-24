@QA-2668 @pixelTests @gtm
Feature: V Shred GTM Event: "Quiz Completed" Pixel Testing - survey-aka1-v3
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Google Tag - VS Quiz Completed - Male Clean Bulk
        When The user navigates to V Shred Survey page
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
