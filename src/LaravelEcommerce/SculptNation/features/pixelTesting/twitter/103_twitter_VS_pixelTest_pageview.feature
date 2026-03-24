@QA-2676 @QA-2671 @pixelTests @twitter
Feature: LE-VS Twitter Pixel Event Testing - PageView
    Background: Load test data
        Given The user loads the LE test data

    Scenario: LE-VS Survey and Purchase Twitter Pixel Testing - PageView - Kendago
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "twitter"
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: LE-VS Survey and Purchase Twitter Pixel Testing - PageView - Internal
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "twitter"
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey flbtv5 - Page View
        When The user begins tracking and navigates to V Shred Survey "flbtv5" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga - Page View
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey survey-ga# - Page View
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv3 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv5 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey surveyaka1v13 - Page View
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpc - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey aka1# - Page View
        When The user begins tracking and navigates to V Shred Survey "aka1#" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey fbkcpcv2 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated

    Scenario: Twitter - Vshred Survey femalefl - Page View
        When The user begins tracking and navigates to V Shred Survey "femalefl" - Twitter
        Then The User verifies "Internal" "Twitter" tag for "VS PageView" event is initiated
        Then The User verifies "Kendago" "Twitter" tag for "VS PageView" event is initiated
