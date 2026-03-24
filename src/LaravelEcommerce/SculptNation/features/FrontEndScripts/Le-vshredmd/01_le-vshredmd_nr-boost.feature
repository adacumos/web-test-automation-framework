@uat @FET-1137 @FE-sprint-11 @frontend @Production
Feature: Verify the vshredmd nr boost page - end to end
    Background: Load test data
        Given The user loads the VS test data

    Scenario: VVerify the vshredmd nr boost page - end to end - mix
        Given The user starts on "LE VShredmd" "nr boost" page
        Then The user clicks the Add To Cart button on vshredmd under the "Three" bottle option
        Then The user fills out the funnel order form
        Then The user verifies nr funnel page
        And The User "Declines" the vshredmd "nr boost" Funnel Offer
        And The User "Declines" the vshredmd "us seno" Funnel Offer
        And The User "Declines" the vshredmd "us sleep" Funnel Offer
        Then The user verifies vshredmd Thank You Page
        Then The user checks "Order Confirmation" email
    #When The user logs into the Vshred Admin Tool as "Admin" user
    #Then The client purchases are sync in VS admin tool - "skipAllFunnels"

    Scenario: VVerify the vshredmd nr boost page - end to end - mix
        Given The user starts on "LE VShredmd" "nr boost" page
        Then The user clicks the Add To Cart button on vshredmd under the "Three" bottle option
        Then The user fills out the funnel order form
        Then The user verifies nr funnel page
        And The User "Declines" the vshredmd "nr boost" Funnel Offer
        And The User "One" the vshredmd "us seno" Funnel Offer
        And The User "Three" the vshredmd "us sleep" Funnel Offer
        Then The user verifies vshredmd Thank You Page
        Then The user checks "Order Confirmation" email
#When The user logs into the Vshred Admin Tool as "Admin" user
#Then The client purchases are sync in VS admin tool - "mixFunnels"
