import { And, Then } from "cypress-cucumber-preprocessor/steps";
import search from '../pageObjects/search'
import loginModal from '../pageObjects/loginModal'

Given("I open website", () => {
    cy.visit(Cypress.config('baseUrl'));
    loginModal.acceptSiteCookies()
})

And("I click on Search bar", () => {
    search.clickOnSearchBar()
})

Then("I search a product category", () => {
    search.searchInSearchBar()
})

Then("I verify product category overview", () => {
    search.searchInSearchBar()
})
