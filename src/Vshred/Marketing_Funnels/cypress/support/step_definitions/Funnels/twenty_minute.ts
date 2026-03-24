/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { twentyMinutesLocators } from '../../locator_libraries';

Then(
    'The User verifies the video on the homepage - 20 minutes to set your metabolism',
    () => {
        twentyMinutesLocators.twentyMinutesLink().should('be.visible');
    }
);
