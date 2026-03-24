/// <reference types="cypress" />

import { When, Step } from '@badeball/cypress-cucumber-preprocessor';

When(
    'A {string} client purchases the {string} Program',
    (gender: string, program: string) => {
        if (gender.toLocaleLowerCase() === 'female') {
            switch (program) {
                case 'Toned in 90 Days':
                    Step(
                        new Mocha.Context(),
                        'The Female user describes self as "I\'m soft. I need to lose 5 to 10 lbs"'
                    );
                    break;
                case 'Fat Loss Extreme for Her':
                    Step(
                        new Mocha.Context(),
                        'The Female user describes self as "I have 20 lbs or more fat"'
                    );
                    break;
                case 'Skinny Toned-90Day':
                    Step(
                        new Mocha.Context(),
                        'The Female user describes self as "I\'m skinny. I need to add toned muscle"'
                    );
                    break;
                default:
                    throw new Error('Invalid Female program selected');
            }
        } else {
            switch (program) {
                case 'Clean Bulk':
                    Step(
                        new Mocha.Context(),
                        'The Male user describes self as "I can\'t get bigger or gain muscle"'
                    );
                    break;
                case 'Fat Loss Extreme for Him':
                    Step(
                        new Mocha.Context(),
                        'The Male user describes self as "I\'m not happy with my body"'
                    );
                    break;
                case 'Ripped in 90D':
                    Step(
                        new Mocha.Context(),
                        'The Male user describes self as "I\'m happy with my body, but"'
                    );
                    break;
                case 'Skinny Ripped 90D':
                    Step(
                        new Mocha.Context(),
                        'The Male user describes self as "I\'m skinny fat"'
                    );
                    break;
                default:
                    throw new Error('Invalid Male program selected');
            }
        }

        cy.logStep('Add to cart and fillout order form details');
        Step(
            new Mocha.Context(),
            'The user clicks "EVERYTHING FOR JUST $57.00" button'
        );
        Step(
            new Mocha.Context(),
            'The user verifies the Checkout form Order details'
        );
        Step(new Mocha.Context(), 'The user fills out the survey order form');
    }
);

When('The User selects Offer and Fills outs the checkout form', () => {
    cy.logStep('Add to cart and fillout order form details');
    Step(
        new Mocha.Context(),
        'The user clicks "EVERYTHING FOR JUST $57.00" button'
    );
    Step(
        new Mocha.Context(),
        'The user verifies the Checkout form Order details'
    );
    Step(new Mocha.Context(), 'The user fills out the survey order form');
});

When('The user impersonates client user to Submit Custom Questionnaire', () => {
    Step(new Mocha.Context(), 'The user impersonates the Client record');
    Step(
        new Mocha.Context(),
        'The user fills out the Custom Plan Questionnaire'
    );
    Step(new Mocha.Context(), 'The user stops impersonating client record');
    Step(new Mocha.Context(), 'The user logs out of VS Admin Tool');
});
When(
    'The user impersonates client user to Submit Accelerator Questionnaire',
    () => {
        Step(new Mocha.Context(), 'The user impersonates the Client record');
        Step(
            new Mocha.Context(),
            'The user fills out the Accelerator Program Questionnaire'
        );
    }
);
When('The user impersonates client user to Submit Elite Questionnaire', () => {
    Step(new Mocha.Context(), 'The user impersonates the Client record');
    Step(
        new Mocha.Context(),
        'The user fills out the Elite Program Questionnaire'
    );
});
