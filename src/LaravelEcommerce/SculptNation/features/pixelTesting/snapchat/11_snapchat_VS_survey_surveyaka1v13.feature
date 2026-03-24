@QA-ats81 @pixelTests @snapchat
Feature: V Shred and SculptNation Snapchat Pixel Testing - surveyaka1v13
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SnapChat - Vshred Internal - surveyaka1v13
        When The user begins tracking and navigates to V Shred Survey page - "Internal" for "snapchat" with endpoint "surveyaka1v13"
        Then Verify the ID and Event "Page View" are present in any request for - "vsInternal" for "snapchat"
        When The user starts V Shred survey for "Man"
        Then The user begins tracking Sculptnation "Quiz Completed" event
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        And The Male user describes self as "I'm skinny fat"
        Then Verify Snapchat event "Quiz Completed" are triggered
        Then The user clicks "EVERYTHING FOR JUST $57.00" button
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills out the survey order form
        Then The user begins tracking Sculptnation "Purchase" event
        And The User "Selects" the CDP Bumper Offer and submits the order
        Then Verify Snapchat event "Purchase" are triggered
