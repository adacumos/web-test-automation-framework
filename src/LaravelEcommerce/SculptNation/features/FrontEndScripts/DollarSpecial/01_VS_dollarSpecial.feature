@FET-443 @FE-sprint-10 @frontend
Feature: Verify user can buy the VSU dollar special
    Background: Load test data
        Given The user loads the VS test data

    Scenario: Buy the VSU VSU dollar special - yes to all upsells
        Given The user starts on "LE VShred" "Dollar Special" page
        And The user accepts the VSU dollar special page
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Subscribes" the "Burn Evolved" Funnel Offer
        When The User Selects "Three Bottle" of "Burn PM" Funnel Offer
        And The User "Upgrades" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "acceptAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "acceptAllFunnels"

    @beta @smoke
    Scenario: Buy the VSU VSU dollar special - no to all upsells
        Given The user starts on "LE VShred" "Dollar Special" page
        And The user accepts the VSU dollar special page
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"
        When The user logs into the Vshred Admin Tool as "Admin" user
        Then The client purchases are sync in VS admin tool - "skipAllFunnels"
