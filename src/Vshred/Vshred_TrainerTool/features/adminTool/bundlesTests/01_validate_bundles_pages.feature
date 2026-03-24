@smoke @QA-1220
Feature: E2E Regression Bundles Pages

    Scenario: Validate VS Bundles Pages
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user navigates to "Bundles" page
        Then The "Bundles" pages are loaded successfully
