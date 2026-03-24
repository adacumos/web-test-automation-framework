@smoke
Feature: Get The Diet And Training Specifically
    Background: Load test data
        Given The user loads the VS test data
    Scenario: Survey funnel
        Given The user visits the base VShred URL
        Then The User verifies the video on the homepage - Get The Diet And Training Plan
#TODO survery funnel, waiting on 2 conflicting PR's to be merged before I add these steps
