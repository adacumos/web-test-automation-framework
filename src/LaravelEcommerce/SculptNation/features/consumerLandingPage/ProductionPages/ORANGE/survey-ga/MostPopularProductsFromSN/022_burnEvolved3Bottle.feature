@Prodution @orange @snProducts @snProductsOrange
Feature: Create Burn Evolved 2.0 orders via Sculptnation landing page
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Create three bottle order from Most Popular Products page section
        Then Connects to SN Orange Production Server
        Given The user navigates to the SculptNation homepage
        When The user browses to "Most Popular Products" section of the landing page
        And The user clicks "Burn Evolved 2.0" bottle image 1 on the landing page
        Then The user clicks Buy Now button from the product page
        And The user clicks the "Speed Up My Metabolism" button under the "Three Bottles" option and checks that the Cart data is correct
        When The user clicks the Proceed to Checkout button
        Then The user fills in the fields on the Checkout page and places the order
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        Then The user clicks the "Decline" button on the "Second" upsell page
        Then The User "Declines" the "Burn Evolved" Funnel Offer
        When The User "Declines" the "Turmeric Black" Funnel Offer
        When The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email

