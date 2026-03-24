@QA-2668 @QA-2604 @pixelTests
Feature: V Shred GTM Event: "Quiz Completed" Pixel Testing - surveyGa
    Background: Load test data
        Given The user loads the LE test data

    Scenario: VS Google Tag - Pixel Test - bodytypequiz
        When The user navigates to V Shred Survey page with endpoint "bodytypequiz"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - survey-ga
        When The user navigates to V Shred Survey page with endpoint "survey-ga"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - survey-ga#
        When The user navigates to V Shred Survey page with endpoint "survey-ga#"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    #not working
    #    Scenario: VS Google Tag - Pixel Test - flbtv5
    #        When The user navigates to V Shred Survey page with endpoint "flbtv5"
    #        Then The user clicks "EVERYTHING FOR JUST $57.00" button
    #        Then Verify GTM event: "Initiate Checkout" exist
    #        Then Verify GTM event: "Add To Cart" exist
    #        And The User verifies "Internal" "GTM" tag for "VS Checkout" event is initiated
    #        Then The User verifies "Kendago" "GTM" tag for "VS Checkout" event is initiated

    Scenario: VS Google Tag - Pixel Test - fbkcpcv3
        When The user navigates to V Shred Survey page with endpoint "fbkcpcv3"
        When The user starts V Shred survey for "Male"
        And The Male user describes self as "I can't get bigger or gain muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - fbkcpcv5
        When The user navigates to V Shred Survey page with endpoint "fbkcpcv5"
        And The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - surveyaka1v13
        When The user navigates to V Shred Survey page with endpoint "surveyaka1v13"
        And The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - fbkcpc
        When The user navigates to V Shred Survey page with endpoint "fbkcpc"
        And The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - aka1#
        When The user navigates to V Shred Survey page with endpoint "aka1#"
        And The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - aka1
        When The user navigates to V Shred Survey page with endpoint "aka1"
        And The user starts V Shred survey for "Woman"
        And The Female user describes self as "I'm soft. I need to lose 5 to 10 lbs"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated

    Scenario: VS Google Tag - Pixel Test - fbkcpcv2
        When The user navigates to V Shred Survey page with endpoint "fbkcpcv2"
        And The user starts new Survey GA Funnel for "Woman"
        When The User describes self as "I'm skinny. I need to add toned muscle"
        Then Verify GTM event: "Quiz Completed" exist
        And The User verifies "Internal" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Kendago" "GTM" tag for "VS Quiz" event is initiated
        And The User verifies "Internal" "Twitter" tag for "VS Quiz" event is initiated
