const searchBar = 'input[type="search"]'
const categoryOverview = 'section[data-test="mms-content-category-overview"]'

class search {
    static clickOnSearchBar() {
        cy.get(searchBar).click()
    }

    static searchInSearchBar() {
        cy.get(searchBar).clear().type("Laptops" + '{enter}')
    }

    static verifyCategoryOverview() {
        cy.get(categoryOverview).should('be.visible')
    }

}
export default search
