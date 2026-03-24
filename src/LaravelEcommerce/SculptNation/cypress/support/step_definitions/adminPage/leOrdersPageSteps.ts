import { When } from '@badeball/cypress-cucumber-preprocessor';
import { dashboardLocators } from '../../locator_libraries';

When(
    'The user clicks on {string} menu from the Admin Tool Dashboard',
    (menu: string) => {
        dashboardLocators.navigateMenu(menu).click();
    }
);
