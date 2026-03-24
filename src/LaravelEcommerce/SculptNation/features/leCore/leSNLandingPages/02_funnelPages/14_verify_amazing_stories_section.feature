@QA-913 @QA-915 @QA-916 @leCore @lePage
Feature: Verify Amazing Success Stories on Sculptnation landing page

    Scenario: Verify Keira sections exists on Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user verifies that "Kiera" image exists
        And The user verifies that "I kinda wanted to cry because I'm" text exists
        And The user verifies that "achieving things that I never" text exists
        And The user verifies that "thought I'd achieve." text exists
        And The user verifies that "BURN EVOLVED 2.0" supplement exists
        And The user verifies that "PRE-WORKOUT" supplement exists
        And The user verifies that "GREENS" supplement exists

    Scenario: Verify Brandon sections exists on Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user clicks the arrow right slider button
        And The user verifies that "Brandon" image exists
        And The user verifies that "I’ve done other programs and never" text exists
        And The user verifies that "really had much success. But this" text exists
        And The user verifies that "whole product and workout program," text exists
        And The user verifies that "the Vshred altogether has been a" text exists
        And The user verifies that "blessing to my life." text exists
        And The user verifies that "BURN EVOLVED 2.0" supplement exists
        And The user verifies that "TURMERIC BLACK" supplement exists
        And The user verifies that "TESTBOOST MAX" supplement exists

    Scenario: Verify Renae sections exists on Amazing Success Stories page section
        Given The user navigates to the SculptNation homepage
        When The user browses to "Amazing Success Stories" section of the landing page
        Then The user clicks the arrow right slider button
        And The user clicks the arrow right slider button
        And The user verifies that "Renae" image exists
        And The user verifies that "You can do things that you didn’t think" text exists
        And The user verifies that "you could do and you can be stronger" text exists
        And The user verifies that "and happier and really successful at" text exists
        And The user verifies that "this program" text exists
        And The user verifies that "BURN EVOLVED 2.0" supplement exists
        And The user verifies that "GREENS" supplement exists
