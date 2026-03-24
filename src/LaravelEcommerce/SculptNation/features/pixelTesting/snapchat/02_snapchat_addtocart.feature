@QA-2607 @QA-2718 @pixelTests @snapchat
Feature: SculptNation Snapchat Pixel Testing - Add to Cart
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Snapchat - Vshred Product- survey-ga - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "survey-ga"
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Add To Cart" are triggered
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "snapchat"

    Scenario: Snapchat - Vshred Product- survey-ga - Add to Cart - InitiateCheckout
        When The user navigates to V Shred Survey page with endpoint "survey-ga#"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user starts new Survey GA Funnel for "Man"
        When The User describes self as "I'm happy with my body, but"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - fbkcpcv2 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv2"
        When The user starts V Shred survey for "Female"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user finishes the V Shred survey and skips video
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - fbkcpc InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpc"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - aka1# - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "aka1#"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - fbkcpcv5 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv5"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - surveyaka1v13 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "surveyaka1v13"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - fbkcpcv3 - InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv3"
        When The user starts V Shred survey for "Male"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- Add to Cart - flbtv5 InitiateCheckout
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "flbtv5"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation Internal/kendago tbmtrfbkcpcecobb - Add to Cart
        When The user navigates to "Burn PM" product page with endpoint "tbmtrfbkcpcecobb"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user selects "4 Bottles" package and clicks "Buy Now" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation Internal/kendago burnfbkcpc - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "burnfbkcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation testrippedfbkcpceconbb - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "testrippedfbkcpceconbb"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation tumericflefbkcpc - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "tumericflefbkcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation testrippedgglcpc - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "testrippedgglcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation tumericflefbkcpcv3 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "tumericflefbkcpcv3"
        And The user skips the product video
        When The user selects "One Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation fbkcpcv1 - Add to Cart
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "fbkcpcv1"
        Then The user begins the muscle building survey
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user selects "Six Bottle" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation burnfilefbkcpcv4 - Add to Cart
        When The user navigates to "Burn PM" product page with endpoint "burnfilefbkcpcv4"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The user skips the product video
        When The user choose "3 Bottles" package and clicks "Speed Up My Metabolism" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation specialofferecofbkcpc - Add to Cart
        When The user navigates to "Burn PM" product page with endpoint "specialofferecofbkcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user selects the "ULTIMATE" Special Offer and clicks "Buy Now" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Sculptnation burnpmflegglshopbndcpc - Add to Cart
        When The user navigates to "Burn PM" product page with endpoint "burnpmflegglshopbndcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user clicks "add to cart" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- fbkcpcv5 - Add to Cart - InitiateCheckout
        When The user navigates to V Shred Survey page with endpoint "fbkcpcv5"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- surveyaka1v13 - Add to Cart - InitiateCheckout
        When The user navigates to V Shred Survey page with endpoint "surveyaka1v13"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered

    Scenario: Snapchat - Vshred Product- fbkcpc - Add to Cart - InitiateCheckout
        When The user navigates to V Shred Survey page with endpoint "fbkcpc"
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        When The user starts V Shred survey for "Man"
        And The Male user describes self as "I'm skinny fat"
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
