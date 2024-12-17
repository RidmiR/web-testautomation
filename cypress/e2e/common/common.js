import { Given } from "cypress-cucumber-preprocessor/steps";
import loginModal from '../pageObjects/loginModal'

Given("I open website", () => {
    cy.visit(Cypress.config('baseUrl'));
    loginModal.acceptSiteCookies()
})