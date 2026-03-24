@QA-2672 @pixelTests @twitter @levsSmoke
Feature: LE-VS Twitter Pixel Event Testing - Consolidated
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Twitter Pixel - Body Type Quiz
        Given The user navigates to V Shred Survey page
        When The user starts new Body Type Survey for "Male"
        When The User describes self as "I'm skinny fat"
        Then The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated
        When The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Checkout" event is initiated
        Then The user fills out the survey order form
        And The User "Selects" Checkout Upsell Offer
        Then The user verifies the next funnel upsell is "Burn Evolved"
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        Then The User verifies "Internal" "Twitter" tag for "VS Purchase" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS Purchase" event is initiated
