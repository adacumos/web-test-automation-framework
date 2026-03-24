/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { sheddingFatLocators } from '../../locator_libraries';

Then(
    'The User verifies the video on the homepage - shedding fat while having fun',
    () => {
        sheddingFatLocators.sheddingFatLink().should('be.visible');
    }
);
