@QA-1440 @FET-1416 @MD @smoke @yy @landingPages @FE-sprint-7
Feature: Supplement Guide for men - all upsells
    Background: Load test data
        Given The user loads the LE test data
        And The user navigates to the SculptNation "Male" Supplement Guide Page

    Scenario: Validate Supplementes and YouTube videos on the male supplement Page
        Then Validating the Supplements on the "Male" Page
        And The user Validates "6" number of the videos on the "female" supplement Page
        And The user clicks the "Supplement-Guide-Male" header menu

    Scenario: Supplement Guide for men - BurnEvolved
        When The user Verfies the "BurnEvolved" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - TestBoostMax
        Then The user Verfies the "TestBoostMax" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - HGHBoost
        When The user Verfies the "HGHBoost" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - BurnPm
        When The user Verfies the "BurnPm" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - Creatine
        When The user clicks the "Creatine" Link on the Page
        Then The user adds "Creatine" to the cart

    Scenario: Supplement Guide for men - PreWorkout
        When The user Verfies the "PreWorkout" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - PostWorkout
        When The user clicks the "PostWorkout" Link on the Page
        Then The user adds "PostWorkout" to the cart

    Scenario: Supplement Guide for men - Protein
        When The user Verfies the "Protein" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - TurmericBlack
        When The user Verfies the "TurmericBlack" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - Greens
        When The user Verfies the "Greens" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - BCAAS
        When The user Verfies the "BCAAS" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - Neuroctane
        When The user Verfies the "Neuroctane" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - FatLossStack
        When The user clicks the "FatLossStack" Link on the Page
        Then The user adds "FatLossStack" to the cart

    Scenario: Supplement Guide for men - MuscleBuildingStack
        When The user clicks the "MuscleBuildingStack" Link on the Page
        Then The user adds "MuscleBuildingStack" to the cart

    Scenario: Supplement Guide for men - Enzymes
        When The user Verfies the "Enzymes" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - Probiotics
        When The user Verfies the "Probiotics" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - COLLAGEN
        When The user Verfies the "Collagen" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - ACV GUMMIES
        When The user Verfies the "AcvGummies" Link on the "male" Supplement Page that links to Amazon

    Scenario: Supplement Guide for men - MULTIVITAMIN
        When The user Verfies the "Multivitamin" Link on the "male" Supplement Page that links to Amazon
