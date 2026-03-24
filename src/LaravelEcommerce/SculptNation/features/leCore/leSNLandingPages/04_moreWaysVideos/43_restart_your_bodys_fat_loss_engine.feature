@QA-1924 @leCore @lePage
Feature: SUPER SIMPLE THIRTY SECOND MORNING HABIT VIDEO AND SALES FUNNEL
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Click video and follow through sales funnel
        Given The user navigates to the SculptNation homepage
        Then The user verifies the "RestartYour" video under, the More Ways To Reach Your Fitness Goals section
        Then The user lands on the "turmericBlackURL" page
        Then The user verifies the video loaded on the page
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to mobile view
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to desktop view
        Then The user skips the video
        Then The user selects six Bottle Purchase
        Then The user Fills out the Order Form and submits the order
        Then The user lands on the "burnEvolvedURL" page
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to mobile view
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to desktop view
        Then The user skips the video
        Then The user selects six Bottle Speed Up My Metabolism
        Then The user lands on the "burnEvolvedURL" page
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to mobile view
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to desktop view
        Then The user skips the video
        Then The user selects six Bottle Subscription for Burn PM
        Then The user lands on the "cdpURL" page
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to mobile view
        Then The user starts the video
        Then The user pauses the video
        Then The user Resizes the browser to desktop view
        Then The user skips the video
        Then The user selects the single CDP upgrade option
        Then The user lands on the "greensCouponURL" page
        Then The user selects the single bottle option
        Then The user lands on the Order Confirmation page
        Then The user verfies Turmeric Black and Price on the Order Confirmation Page
        Then The user verfies Burn Evolved and Price on the Order Confirmation Page
        Then The user verfies Burn PM and Price on the Order Confirmation Page
        Then The user verfies Custom Diet Plan and Price on the Order Confirmation Page
        Then The user verfies Greens and Price on the Order Confirmation Page
        Then The user verfies Sales Tax on the Order Confirmation Page
        Then The user verfies the Order Total on the Order Confirmation Page

