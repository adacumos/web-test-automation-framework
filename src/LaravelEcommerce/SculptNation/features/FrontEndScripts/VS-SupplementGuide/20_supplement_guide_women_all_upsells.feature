@QA-144 @FET-1416 @MD @smoke @yy @landingPages @FE-sprint-7
Feature: Supplement Guide for female - all upsells
    Background: Load test data
        Given The user loads the LE test data
        And The user navigates to the SculptNation "Female" Supplement Guide Page

    Scenario: Validate Supplementes and YouTube videos on the male supplement Page
        Then Validating the Supplements on the "female" Page
        And The user Validates "4" number of the videos on the "female" supplement Page
        And The user clicks the "Supplement-Guide-Female" header menu

    Scenario: Supplement Guide for women - BurnEvolved
        When The user Verfies the "BurnEvolved" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - HGHBoost
        When The user Verfies the "HGHBoost" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - BurnPm
        When The user Verfies the "BurnPm" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - PreWorkout
        When The user Verfies the "PreWorkout" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - PostWorkout
        When The user clicks the "PostWorkout" Link on the Page
        Then The user adds "PostWorkout" to the cart

    Scenario: Supplement Guide for women - Protein
        When The user Verfies the "Protein" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - TurmericBlack
        When The user Verfies the "TurmericBlack" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - Greens
        When The user Verfies the "Greens" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - BCAAS
        When The user Verfies the "BCAAS" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - Neuroctane
        When The user Verfies the "Neuroctane" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - FatLossStack
        When The user clicks the "FatLossStack" Link on the Page
        Then The user adds "FatLossStack" to the cart

    Scenario: Supplement Guide for women - Enzymes
        When The user Verfies the "Enzymes" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - Probiotics
        When The user Verfies the "Probiotics" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - COLLAGEN
        When The user Verfies the "Collagen" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - ACV GUMMIES
        When The user Verfies the "AcvGummies" Link on the "female" Supplement Page that links to Amazon

    Scenario: Supplement Guide for women - MULTIVITAMIN
        When The user Verfies the "Multivitamin" Link on the "female" Supplement Page that links to Amazon
