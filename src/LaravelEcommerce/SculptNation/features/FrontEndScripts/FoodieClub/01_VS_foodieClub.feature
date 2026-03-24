@prod @levshred @FET-1412 @FE-sprint-8 @frontend
Feature: Foodie Club - Verify joining and upsells
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Foodie Club - Verify user can join the foodie club - No to all upsells
        Given The user starts on "LE VShred" "Foodie Club" page
        Then Verify the Foodie Club page
        Then Select the give me access to join the foodie club
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Turmeric Black" Funnel Offer
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        Then The client purchases are sync in VS admin tool - "foodieClub-skipAllFunnels"


    Scenario: Foodie Club - Verify user can join the foodie club - Yes to all upsells
        Given The user starts on "LE VShred" "Foodie Club" page
        Then Verify the Foodie Club page
        Then Select the give me access to join the foodie club
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Upgrades" the "Turmeric Black" Funnel Offer
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        And The User "Subscribes" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        When The user logs into the Vshred Admin Tool as "Trainer Manager" user
        Then The client purchases are sync in VS admin tool - "foodieClub-acceptAllFunnels"
