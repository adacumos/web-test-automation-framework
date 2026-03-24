@FET-1453 @frontend @FE-sprint-9
Feature: V Shred Hormone Quiz
    Background: Load test data
        Given The user loads the LE test data

    Scenario: V Shred Hormone Quiz - declines all offers
        Given The user starts on "Vshred" "Hormone Quiz" page
        And The user starts VShred Hormone Quiz
        Then The user accepts the hormone quiz offer
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Declines" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Declines" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "skipAllFunnels"

    @beta @smoke @leCore
    Scenario: V Shred Hormone Quiz - y/n to offers
        Given The user starts on "Vshred" "Hormone Quiz" page
        And The user starts VShred Hormone Quiz
        Then The user accepts the hormone quiz offer
        Then The user fills in the fields on the SN Secure Checkout page and places the order
        And The User "Declines" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 1B Upsell" Funnel Offer
        And The User "Declines" the "Burn PM" Funnel Offer
        And The User "Upgrades" the "Custom Plan" Funnel Offer
        And The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "mixAllFunnels"
