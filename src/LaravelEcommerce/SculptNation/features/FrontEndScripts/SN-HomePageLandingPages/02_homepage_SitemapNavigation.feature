@frontend @QA-1521 @QA-1522 @QA-1523 @QA-1524 @QA-1525 @QA-1526 @QA-1527 @QA-1528 @QA-1533 @footer @MD @landingPages
Feature: SculptNation Page Sitemap Menu List Validations and page section loading

    Scenario: Navigate between Sculptnation Sitemap menu items
        Given The user navigates to the SculptNation homepage
        # When The user navigates through Sitemap - "Shop" menu item
        # Then The "Shop" page is loaded with the expected page sections
        # When The user navigates through Sitemap - "About-Us" menu item
        # Then The "About-Us" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Top-Selling-Items" menu item
        Then The "Top-Selling-Items" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Privacy-Policy" menu item
        Then The "Privacy-Policy" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Shipping-and-Returns" menu item
        Then The "Shipping-and-Returns" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Our-Press" menu item
        Then The "Our-Press" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Contact-Us" menu item
        Then The "Contact-Us" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Reviews" menu item
        Then The "Reviews" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Home" menu item
        Then The "Home" page is loaded with the expected page sections
