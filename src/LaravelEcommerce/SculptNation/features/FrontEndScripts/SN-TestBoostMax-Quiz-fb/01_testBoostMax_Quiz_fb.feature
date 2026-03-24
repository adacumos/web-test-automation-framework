@FET-1247 @FE-sprint-6 @frontend
Feature: SculptNation test boost max quiz
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SculptNation test boost max quiz fb - yes to all upsells
        Given The user starts on "LE_ADMIN_URL" "testBoost Max Quiz" page
        Then The user fills out "yes" to the test boost max quiz
        Then The user skips the video
        Then The user selects "Skyrocket my manhood" to continue to the checkout page
        Then The user fills in the fields on a SN Secure Checkout page and places the order
        Then The user skips video then clicks "I understand" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The User Selects "Three Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        Then The user skips video then clicks "yes!" from the offer page
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "acceptAllFunnels"


    @beta @smoke
    Scenario: SculptNation test boost max quiz fb - decline all upsells
        Given The user starts on "LE_ADMIN_URL" "testBoost Max Quiz" page
        Then The user fills out "yes" to the test boost max quiz
        Then The user skips the video
        Then The user selects "Skyrocket my manhood" to continue to the checkout page
        Then The user fills in the fields on a SN Secure Checkout page and places the order
        Then The user skips video then clicks "I understand" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"

    Scenario: SculptNation test boost max quiz fb - y/n to upsells
        Given The user starts on "LE_ADMIN_URL" "testBoost Max Quiz" page
        Then The user fills out "yes" to the test boost max quiz
        Then The user skips the video
        Then The user selects "Skyrocket my manhood" to continue to the checkout page
        Then The user fills in the fields on a SN Secure Checkout page and places the order
        Then The user skips video then clicks "I understand" from the offer page
        Then The user skips video then clicks "No thanks" from the offer page
        Then The User Selects "One Bottle" of "HGH Boost" Funnel Offer
        Then The User Selects "One Bottle" of "HGH Boost" Funnel Offer
        Then The user skips video then clicks "No thanks" from the offer page
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "mixFunnels"
