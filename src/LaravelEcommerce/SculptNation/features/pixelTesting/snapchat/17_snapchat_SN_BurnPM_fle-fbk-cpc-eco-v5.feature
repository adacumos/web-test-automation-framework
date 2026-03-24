#NOTE: Currently the pixels are not found on this page, can uncomment when this page is updated
@pixelTests
Feature: SN SnapChat Pixel - sp/burn/burnpm-fle-fbk-cpc-eco-v5
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN SnapChat Pixel - sp/burn/burnpm-fle-fbk-cpc-eco-v5
        Given The user navigates to "BurnEvolved with FatLoss" Sculptnation Survey page
        #Then The user begins tracking Sculptnation "Page View" event
        #Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select buy now and verifies checkout page
        #Then Verify Snapchat event "Add To Cart" are triggered
        #Then Verify Snapchat event "Page View" are triggered
        Then The user fills in the fields on the SN Secure Checkout page and places the order
#Then The user begins tracking Sculptnation "Purchase" event
#Then Verify Snapchat event "Purchase" are triggered
