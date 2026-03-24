@QA-1682 @QA-1487 @QA-1488 @QA-1489 @QA-1490 @QA-1491 @QA-1493 @QA-1532 @QA-1503 @QA-1502 @QA-1399 @leCore @homepage @lePage @clientPages
Feature: SculptNation Page Header Menu Validations and page section loading

    Scenario: Navigate between Sculptnation header menu items
        Given The user navigates to the SculptNation homepage
        When The user clicks the "Supplements" header menu
        Then The "Supplements" page is loaded with the expected page sections
        When The user clicks the "Supplement-Guide-Female" header menu
        Then The "Supplement-Guide-Female" page is loaded with the expected page sections
        When The user clicks the "Home" header menu
        Then The "Home" page is loaded with the expected page sections
        When The user clicks the "Supplement-Guide-Male" header menu
        Then The "Supplement-Guide-Male" page is loaded with the expected page sections
        # When The user clicks the "About-Us" header menu
        # Then The "About-Us" page is loaded with the expected page sections
        When The user clicks the "My-Account" header menu
        Then The "My-Account" page is loaded with the expected page sections
        When The user clicks the "Reviews" header menu
        Then The "Reviews" page is loaded with the expected page sections
        When The user clicks the "Clothing" header menu

    Scenario: Navigate between Sculptnation header icons
        Given The user navigates to the SculptNation homepage
        When The user clicks the "Facebook" header icon
        When The user clicks the "Instagram" header icon
        When The user clicks the "Contact-Us" header icon
        Then The "Contact-Us" page is loaded with the expected page sections
        When The user clicks the "Cart" header icon
        Then The "Cart" page is loaded with the expected page sections
        When The user clicks the "SculptNation" header icon
        Then The "Home" page is loaded with the expected page sections

    Scenario: Navigate between Sculptnation header menu items iPhone view
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "iPhone12 pro max"
        When The user clicks the hamburger icon
        When The user clicks the "Supplements" header menu
        Then The "Supplements" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Supplement-Guide-Female" header menu
        Then The "Supplement-Guide-Female" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Home" header menu
        Then The "Home" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Supplement-Guide-Male" header menu
        Then The "Supplement-Guide-Male" page is loaded with the expected page sections
        # When The user clicks the hamburger icon
        # When The user clicks the "About-Us" header menu
        # Then The "About-Us" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "My-Account" header menu
        Then The "My-Account" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Reviews" header menu
        Then The "Reviews" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Clothing" header menu

    Scenario: Navigate between Sculptnation header icons iPhone View
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "iPhone12 pro max"
        When The user clicks the "Facebook" header icon
        When The user clicks the "Instagram" header icon
        When The user clicks the "Contact-Us" header icon
        Then The "Contact-Us" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Cart" header icon
        Then The "Cart" page is loaded with the expected page sections
        When The user clicks the "SculptNation" header icon
        Then The "Home" page is loaded with the expected page sections

    Scenario: Navigate between Sculptnation header menu items Android View
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "Samsung Galaxy S10 Lite"
        When The user clicks the hamburger icon
        When The user clicks the "Supplements" header menu
        Then The "Supplements" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Supplement-Guide-Female" header menu
        Then The "Supplement-Guide-Female" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Home" header menu
        Then The "Home" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Supplement-Guide-Male" header menu
        Then The "Supplement-Guide-Male" page is loaded with the expected page sections
        # When The user clicks the hamburger icon
        # When The user clicks the "About-Us" header menu
        # Then The "About-Us" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "My-Account" header menu
        Then The "My-Account" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Reviews" header menu
        Then The "Reviews" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Clothing" header menu

    Scenario: Navigate between Sculptnation header icons Android View
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "Samsung Galaxy S10 Lite"
        When The user clicks the "Facebook" header icon
        When The user clicks the "Instagram" header icon
        When The user clicks the "Contact-Us" header icon
        Then The "Contact-Us" page is loaded with the expected page sections
        When The user clicks the hamburger icon
        When The user clicks the "Cart" header icon
        Then The "Cart" page is loaded with the expected page sections
        When The user clicks the "SculptNation" header icon
        Then The "Home" page is loaded with the expected page sections
