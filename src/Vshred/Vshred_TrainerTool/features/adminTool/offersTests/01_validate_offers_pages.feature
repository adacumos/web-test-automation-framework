@smoke @QA-1221
Feature: E2E Regression tests for VS Offers Page

    Scenario: Validate VS Offers Pages
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user navigates to "Offers" page
        Then The "Offers" pages are loaded successfully
