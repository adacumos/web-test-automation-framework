@FET-1373 @FE-sprint-4 @frontend
Feature: Navigate between Vshred Footer Items
    Background: Navigate between Vshred Footer Items
        Given The user loads the VS test data

    Scenario: Navigate between Vshred Footer Items
        Given The user starts on "VShred" "Home page" page
        When The user clicks the "Terms-and-Conditions" footer link
        Then The "Terms-and-Conditions" page is loaded with the expected page sections
        When The user clicks the "Privacy-Policy" footer link
        Then The "Privacy-Policy" page is loaded with the expected page sections
        When The user clicks the "Accessibility" footer link
        Then The "Accessibility" page is loaded with the expected page sections
        When The user clicks the "Testimonial-Support" footer link
        Then The "Testimonial-Support" page is loaded with the expected page sections
        When The user navigates through Sitemap - "Home" menu item
        And The user clicks the "DNS-Personal-Information" footer link
        Then The "DNS-Personal-Information" page is loaded with the expected page sections

