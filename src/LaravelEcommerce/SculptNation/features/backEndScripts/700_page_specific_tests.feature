@page-tests
Feature: Page Specific Functionality

    As a user, I want to verify specific page elements and interactions
    To ensure the application behaves as expected on different pages.

    # The skipping logic based on Cypress.env('ASSET_ID') and Cypress.env('ASSET_TYPE')
    # is typically handled at the preprocessor/runner level, or by tagging.
    # For example, you might only run this feature if certain environment variables are set,
    # or use a before hook in your step definitions to skip scenarios if conditions aren't met.

    @id-123 @page-change
    Scenario: Verify header for a specific page
        Given I am on the specific page with path "/your-specific-page-path"
        Then I should see the header containing "Expected Page Title"

    @page-change
    Scenario: Verify form submission on another page
        Given I am on the page with path "/another-page"
        When I fill in the "username" field with "testuser"
        And I fill in the "password" field with "testpassword"
        And I click the "Submit" button
        Then I should see a success message "Form submitted successfully!"
        And the URL should be "/submission-success"
