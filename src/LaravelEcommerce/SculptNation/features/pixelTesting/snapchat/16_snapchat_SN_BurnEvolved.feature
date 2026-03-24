#NOTE: Throws an error at checkout
@pixelTests
Feature: SN SnapChat Pixel - /sp/burn-evolved/burn-fbk-cpc
    Background: Load test data
        Given The user loads the LE test data

    Scenario: SN SnapChat Pixel - /sp/burn-evolved/burn-fbk-cpc5 - 1 bottle
        Given The user navigates to "BurnEvolved with FatLoss" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "Three" bottles then Speed up my metabolism
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills in the fields on the SN Secure Checkout page and places the order

    Scenario: SN SnapChat Pixel - /sp/burn-evolved/burn-fbk-cpc - 3 bottles
        Given The user navigates to "BurnEvolved with FatLoss" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "Three" bottles then Speed up my metabolism
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user fills in the fields on the SN Secure Checkout page and places the order

    Scenario: SN SnapChat Pixel - /sp/burn-evolved/burn-fbk-cpc - 6 bottles
        Given The user navigates to "BurnEvolved with FatLoss" Sculptnation Survey page
        Then The user begins tracking Sculptnation "Page View" event
        Then The user begins tracking Sculptnation "Add To Cart" event
        Then The user select "Six" bottles then Speed up my metabolism
        Then Verify Snapchat event "Page View" are triggered
        Then Verify Snapchat event "Add To Cart" are triggered
        Then The user begins tracking Sculptnation "Purchase" event
        Then The user fills in the fields on the SN Secure Checkout page and places the order
