@beta @smoke @FE-sprint-6 @frontend
Feature: Verify all social media links are working
    Background: Load test data
        Given The user loads the VS test data

    Scenario: The verifyies the Youtube link takes user to the correct url
        Given The user starts on "VShred Production" "Home page" page
        Then The user selects and verifies the live chat feature
