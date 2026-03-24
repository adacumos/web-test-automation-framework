Feature: Custom Program Video
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Click video and verify it is working
        Given The user navigates to the SculptNation homepage
        Then The user verifies the video loaded on the page
        And The user starts the video
        And The user pauses the video
        And The user Resizes the browser to mobile view
        And The user starts the video
        And The user pauses the video
        And The user Resizes the browser to desktop view
        And The user starts the video
        And The user pauses the video

