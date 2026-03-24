@smoke @QA-1236
Feature: E2E Regression tests for VS Products Page

    Scenario: Validate VS Products Pages
        Given The user logs into the VShred Admin Tool using an "admin" account
        When The user navigates to "Products" page
        Then The "Products" pages are loaded successfully
