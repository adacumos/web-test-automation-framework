/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { getTheDietLocators } from '../../locator_libraries';

Then(
    'The User verifies the video on the homepage - Get The Diet And Training Plan',
    () => {
        getTheDietLocators.getTheDietLink().should('be.visible');
    }
);
