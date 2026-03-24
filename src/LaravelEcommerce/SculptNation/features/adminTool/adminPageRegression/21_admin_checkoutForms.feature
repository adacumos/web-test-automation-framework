@QA-1780 @QA-1782 @QA-1784 @QA-1784 @MD @adminTool
Feature: LE Admin Page Regression - Checkout Forms Pages
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Validate LE Admin Checkout Forms > Bumper Templates pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on "Bumper-Templates" menu from the Admin Tool Dashboard
        Then The Checkout Forms "Bumper-Templates" pages are loaded

    Scenario: Validate LE Admin Checkout Forms > Bumpers pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Bumpers" button from the sidebar menu of the Admin Tool Dashboard
    # Then The Checkout Forms "Bumpers" pages are loaded

    Scenario: Create New Bumper Template and Bumper
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The User creates a new Checkout Form - "Bumper-Templates"
        When The User creates a new Checkout Form - "Bumpers"
        Then Delete Checkout Form "Bumpers" Test Data
        Then Delete Checkout Form "Bumper-Templates" Test Data

    Scenario: Validate LE Admin Checkout Forms > Carousels pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Carousels" button from the sidebar menu of the Admin Tool Dashboard
        Then The Checkout Forms "Carousels" pages are loaded

    Scenario: Create New Carousel
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The User creates a new Checkout Form - "Carousels"
        Then Delete Checkout Form "Carousels" Test Data

    Scenario: Validate LE Admin Checkout Forms > Reviews pages
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The user clicks on the "Reviews" button from the sidebar menu of the Admin Tool Dashboard
        Then The Checkout Forms "Reviews" pages are loaded

    Scenario: Create New Reviews
        Given The user logs into the Admin Tool using an account with "admin" credentials
        When The User creates a new Checkout Form - "Reviews"
        Then Delete Checkout Form "Reviews" Test Data
