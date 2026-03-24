@pixelTests @twitter
Feature: LE-VS Twitter Pixel Event Testing - Add to Cart
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Twitter - Vshred Survey survey-ga - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        And The user starts tracking for twitter event "addtocart"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga# - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Twitter"
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        And The user starts tracking for twitter event "addtocart"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv3 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Twitter"
        When The user starts V Shred survey for "Male"
        And The user starts tracking for twitter event "addtocart"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv5 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "addtocart"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey surveyaka1v13 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "addtocart"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpc - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "addtocart"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey aka1# - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Twitter"
        When The user starts V Shred survey for "Man"
        And The user starts tracking for twitter event "addtocart"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv2 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Twitter"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for twitter event "addtocart"
        And The user finishes the V Shred survey and skips video
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated

    Scenario: Twitter - Vshred Survey femalefl - Add to Cart
        When The user begins tracking and navigates to V Shred Survey "femalefl" - "Twitter"
        When The user starts V Shred survey for "Female"
        And The user starts tracking for twitter event "addtocart"
        Then The user skips the video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then The User verifies "Internal" "Twitter" tag for "VS Checkout" event is initiated
