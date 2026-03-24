@QA-2614 @QA-2617 @pixelTests @tiktok
Feature: V Shred and SculptNation TikTok Pixel Testing - Page View
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Tiktok - Vshred Internal - Page View - survey-ga
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "survey-ga"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - survey-ga
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "survey-ga#"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - surveyaka1
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "surveyaka1"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - surveyaka1
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "surveyaka1"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "flbtv5"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "flbtv5"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "flbtv5"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "fbkcpcv3"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "flbtv5"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - flbtv5
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "fbkcpcv5"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - surveyaka1v13
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "surveyaka1v13"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - surveyaka1v13
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "surveyaka1v13"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - surveyaka1v13
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "surveyaka1v13"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - fbkcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "fbkcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - fbkcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "fbkcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedfbkcpcecobb
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedfbkcpcecobb"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedfbkcpcecobb
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "testrippedfbkcpcecobb"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "tumericflefbkcpcv3"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "testrippedfbkcpceconbb"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "burnfilefbkcpcv4"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedgglcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedgglcpc
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "specialofferecofbkcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - burnevolvedfbkcpcv19
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "burnevolvedfbkcpcv19"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - burnevolvedfbkcpcv19
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "burnevolvedfbkcpcv19"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedfbkcpceco
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedfbkcpceco"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedfbkcpceco
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "testrippedfbkcpceco"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - testrippedfbkcpceco
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "testrippedfbkcpceco"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - testrippedfbkcpceco
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "testrippedfbkcpc"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"

    Scenario: Tiktok - Vshred Kendago - Page View - femaleGT
        When The user begins tracking and navigates to V Shred Survey page - "Kendago" for "tiktok" with endpoint "femaleGT"
        Then Verify the ID and Event "Page View" are present in any request for - "vsKendago" for "tiktok"

    Scenario: Tiktok - Vshred Internal - Page View - femaleGT
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "tiktok" with endpoint "femaleGT"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "tiktok"
