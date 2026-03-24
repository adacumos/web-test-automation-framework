@QA-1455 @lePageMove @leShort @frontend @FE-sprint-8
Feature: LE Move Landing page - Secret Stack - NO Shaker - Select Some Funnel Offers
    Background: Load test data
        Given The user loads the LE test data

    Scenario: Selects Three Bottle Package and purchase CDP Funnel Offer
        Given The user navigates to "TestBoostRipped-noShaker" CMS Offer page
        Then The Bundled Product Offer details are displayed
        When The user selects "3 Bottles" package and clicks "Buy Now" button
        Then The user verifies the checkout form type and makes purchase
        When The User Selects "Six Bottle" of "HGH Boost" Funnel Offer
        Then The User "Subscribes" the "Creatine" Funnel Offer
        And The User "Declines" the "Custom Diet Plan" Funnel Offer
        And The User "Declines" the "Greens" Funnel Offer
        Then The user checks "Order Confirmation" email
        Then The user checks "Order Confirmation" email
        Then The Orders are sync in the Admin Tool - "threeBottle-selectFunnels"
        When The password is reset to default value
        Then The user logs out of Admin Tool
        When The client user logs into the SculptNation Account
        And The user navigates to MyAccount "Orders" page
        Then The user Views Orders created through the Funnel - "threeBottle-selectFunnels"
