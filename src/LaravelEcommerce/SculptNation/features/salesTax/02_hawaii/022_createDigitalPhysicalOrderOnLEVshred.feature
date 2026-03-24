@salesTax
Feature: Salestax order verification from LE Vshred with Hawaii state address
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Verify Sales Tax on orders created with Hawaii state address
        And The user navigates to V Shred Survey page
        When The user starts new Survey GA Funnel for "Woman"
        And The User describes self as "I have 20 lbs or more fat"
        Then The User selects Offer and Fills outs the checkout form
        Then The user verifies the sales tax on "VS" is correct
        And The User "Selects" Checkout Upsell Offer
        When The User "Upgrades" the "Burn Evolved" Funnel Offer
        And The User "Upgrades" the "Burn 3B Upsell" Funnel Offer
        When The User "Upgrades" the "Burn PM" Funnel Offer
        Then The User "Declines" the "Ultimate Recipe" Funnel Offer
        And The User "Declines" the "VSU" Funnel Offer
        Then The user verifies the Sales Tax on "LE"
        Then The user verifies the Sales Tax on "VS"

