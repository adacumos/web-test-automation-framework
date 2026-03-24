@QA-1516 @footer @leCore @lePage @homepage @clientPages
Feature: SculptNation Page Footer Item List Validations and page section loading

    Scenario: Navigate between Sculptnation Footer Items
        Given The user navigates to the SculptNation homepage
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

    Scenario: Navigate between Sculptnation Footer Items iPhone View
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "iPhone12 pro max"
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

    Scenario: Navigate between Sculptnation Footer Items Android View
        Given The user navigates to the SculptNation homepage
        And The user Resizes the browser to "Samsung S24"
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
