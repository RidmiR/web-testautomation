import { When, And } from "cypress-cucumber-preprocessor/steps";
import productList from '../pageObjects/productListPage'
import loginModal from '../pageObjects/loginModal'

Given("I open website", () => {
    cy.visit(Cypress.config('baseUrl'));
    loginModal.acceptSiteCookies()
})

When("Navigate to {string} product listing page", (productCategory) => {
    productList.goToProductListPage(productCategory)
})

And("Verify product cards are visible", () => {
    productList.verifyProductPrice
})