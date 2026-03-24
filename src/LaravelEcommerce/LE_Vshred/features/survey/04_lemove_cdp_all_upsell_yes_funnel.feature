#@QA-2161
#Feature: All Upsell-Yes LE Move CDP Page

#    Background: Load test data
#        Given The user loads the VS test data

#    Scenario: All Upsell-Yes LE Move CDP Page - Diet Plan with VSU Free Trail
#        Given The User visits "CDP" base URL
#        Then The user verifies the "CDP" URL
#        And The user clicks on the "yes CDP" button
#        Then The user verifies the "CDP Packages" URL
#        And The user clicks on the "diet plan" button
#        And The user fills out the Order Form with cdpupsell and submits the order
#        Then The user verifies the "burn v3" URL
#        And The user clicks on the "yes burn" button
#        And The user fills out the supplement order shipping form
#        Then The user verifies the "burn v5" URL
#        And The user clicks on the "add to order" button
#        Then The user verifies the "VSU" URL
#        And The user clicks on the "claim membership offer" button
#        Then The user verifies the "greens" URL
#        And The user clicks on the "get my greens" button
#        And The user logs into the "LE Vshred" Admin tool with "admin" account credentials
#        When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#        Then The user verifies the "cdp vsu trail" upsell order
#        And The user logs into the "Sculptnation" Admin tool with "admin" account credentials
#        When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#        Then The user verifies the "cdp vsu trail" upsell order
#        And The user checks "Order Confirmation" email
#         And The user verifies cdp vsu trail email contents


#   Scenario: All Upsell-Yes LE Move CDP Page - Diet Plan with VSU Membership
#       Given The User visits "CDP" base URL
#       Then The user verifies the "CDP" URL
#       And The user clicks on the "yes CDP" button
#       Then The user verifies the "CDP Packages" URL
#       And The user clicks on the "diet plan" button
#       And The user fills out the Order Form with cdpupsell and submits the order
#       Then The user verifies the "burn v3" URL
#       And The user clicks on the "yes burn" button
#       And The user fills out the supplement order shipping form
#       Then The user verifies the "burn v5" URL
#       And The user clicks on the "add to order" button
#       Then The user verifies the "VSU" URL
#       And The user clicks on the "claim annual pass" button
#       Then The user verifies the "greens" URL
#       And The user clicks on the "get my greens" button
#       And The user logs into the "LE Vshred" Admin tool with "admin" account credentials
#       When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#       Then The user verifies the "cdp vsu membership" upsell order
#       And The user logs into the "Sculptnation" Admin tool with "admin" account credentials
#       When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#       Then The user verifies the "cdp vsu membership" upsell order
#       And The user checks "Order Confirmation" email
#        And The user verifies cdp vsu membership email contents

#   Scenario: All Upsell-Yes LE Move CDP Page - Diet and Training Plan with VSU Free Trail
#       Given The User visits "CDP" base URL
#       Then The user verifies the "CDP" URL
#       And The user clicks on the "yes CDP" button
#       Then The user verifies the "CDP Packages" URL
#       And The user clicks on the "diet and training plan" button
#       And The user fills out the Order Form with cdpupsell and submits the order
#       Then The user verifies the "burn v3" URL
#       And The user clicks on the "yes burn" button
#       And The user fills out the supplement order shipping form
#       Then The user verifies the "burn v5" URL
#       And The user clicks on the "add to order" button
#       Then The user verifies the "VSU" URL
#       And The user clicks on the "claim membership offer" button
#       Then The user verifies the "greens" URL
#       And The user clicks on the "get my greens" button
#       And The user logs into the "LE Vshred" Admin tool with "admin" account credentials
#       When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#       Then The user verifies the "cdp vsu trail training plan" upsell order
#       And The user logs into the "Sculptnation" Admin tool with "admin" account credentials
#       When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#       Then The user verifies the "cdp vsu trail training plan" upsell order
#       And The user checks "Order Confirmation" email
#        And The user verifies cdp vsu trail email contents

#    Scenario: All Upsell-Yes LE Move CDP Page - Diet and Training Plan with VSU Membership
#        Given The User visits "CDP" base URL
#        Then The user verifies the "CDP" URL
#        And The user clicks on the "yes CDP" button
#        Then The user verifies the "CDP Packages" URL
#        And The user clicks on the "diet and training plan" button
#        And The user fills out the Order Form with cdpupsell and submits the order
#        Then The user verifies the "burn v3" URL
#        And The user clicks on the "yes burn" button
#        And The user fills out the supplement order shipping form
#        Then The user verifies the "burn v5" URL
#        And The user clicks on the "add to order" button
#        Then The user verifies the "VSU" URL
#        And The user clicks on the "claim annual pass" button
#        Then The user verifies the "greens" URL
#        And The user clicks on the "get my greens" button
#        And The user logs into the "LE Vshred" Admin tool with "admin" account credentials
#        When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#        Then The user verifies the "cdp vsu membership training plan" upsell order
#        And The user logs into the "Sculptnation" Admin tool with "admin" account credentials
#        When The user clicks on the "Orders" menu from the Admin Tool Dashboard
#        Then The user verifies the "cdp vsu membership training plan" upsell order
#        And The user checks "Order Confirmation" email
#        And The user verifies cdp vsu membership email contents
