
Feature: GTM Pixel testing
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Test GTM Pixel Firing
        When has a dataLayer and loads GTM
        Then Before - stub ga
        When Homepage has a pageview and ecommerce impression hit
        Then Go to product detail page, add to cart, go to checkout
