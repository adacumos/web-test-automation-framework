@beta @smoke @FET-1137 @FE-sprint-6 @frontend
Feature: Verify all social media links are working
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Verifies the Youtube link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Youtube" social media icon and verify

    Scenario: Verifies the Facebook link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Facebook" social media icon and verify

    Scenario: Verifies the Instagram link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Instagram" social media icon and verify

    Scenario: Verifies the Linkedin link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Linkedin" social media icon and verify

    Scenario: Verifies the Apple link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Apple" social media icon and verify

    Scenario: Verifies the Pinterest link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Pinterest" social media icon and verify

    Scenario: Verifies the Tiktok link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Tiktok" social media icon and verify

    Scenario: Verifies the x link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "X" social media icon and verify

    Scenario: Verifies the Google link takes user to the correct url
        Given The user starts on "VShred" "Home page" page
        Then User select the "Google" social media icon and verify
