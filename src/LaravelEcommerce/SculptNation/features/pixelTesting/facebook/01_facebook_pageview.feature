@QA-2593 @QA-2588 @QA-1811 @QA-2716 @pixelTests @facebook
Feature: V Shred and SculptNation Facebook Pixel Testing - Page View
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Facebook - Vshred Survey survey-ga - Page View
        When The user begins tracking and navigates to V Shred Survey "survey-ga" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey survey-ga# - Page View
        When The user begins tracking and navigates to V Shred Survey "survey-ga#" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey surveyaka1 - Page View
        When The user begins tracking and navigates to V Shred Survey "surveyaka1" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey flbtv5 - Page View
        When The user begins tracking and navigates to V Shred Survey "flbtv5" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey fbkcpcv3 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv3" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey fbkcpcv5 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv5" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey surveyaka1v13 - Page View
        When The user begins tracking and navigates to V Shred Survey "surveyaka1v13" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey fbkcpc - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey aka1# - Page View
        When The user begins tracking and navigates to V Shred Survey "aka1#" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Vshred Survey fbkcpcv2 - Page View
        When The user begins tracking and navigates to V Shred Survey "fbkcpcv2" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflefbkcpcecov5 - Page View
        When The user begins tracking and navigates to Sculptnation page "burnpmflefbkcpcecov5" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnfbkcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "burnfbkcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpcecobb - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpcecobb" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedgglcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedgglcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago tumericflefbkcpcv3 - Page View
        When The user begins tracking and navigates to Sculptnation page "tumericflefbkcpcv3" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbb - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbb" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnfilefbkcpcv4 - Page View
        When The user begins tracking and navigates to Sculptnation page "burnfilefbkcpcv4" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago specialofferecofbkcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "specialofferecofbkcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnevolvedfbkcpcv19 - Page View
        When The user begins tracking and navigates to Sculptnation page "burnevolvedfbkcpcv19" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceco - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceco" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnga - Page View
        When The user begins tracking and navigates to Sculptnation page "burnga" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago sculptnation - Page View
        When The user begins tracking and navigates to Sculptnation page "sculptnation" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago fbkcpcv1 - Page View
        When The user begins tracking and navigates to Sculptnation page "fbkcpcv1" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago testrippedfbkcpceconbbv2 - Page View
        When The user begins tracking and navigates to Sculptnation page "testrippedfbkcpceconbbv2" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflegglshopbndcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "burnpmflegglshopbndcpc" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"

    Scenario: Facebook - Sculptnation Internal/kendago burnpmflegglshopbndcpc - Page View
        When The user begins tracking and navigates to Sculptnation page "femaleGT" - "Facebook"
        Then Verify the ID and Event "Page View" are present in any request for - "snInternal"
        Then Verify the ID and Event "Page View" are present in any request for - "snKendago"
