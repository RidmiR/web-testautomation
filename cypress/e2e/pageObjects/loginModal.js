const userMenu = 'button[data-test="myaccount-dropdown-button"]'
const loginBtn = 'button[id="myaccount-dropdown-login-button"]'
const logoutBtn = 'a[class="sc-2fa46f1d-0 gfGXiX sc-8d64a1b4-2 bcnxnX"]'
const loginBtnInLoginModal = 'button[id="mms-login-form__login-button"]'
const emailInput = 'input[id="email"]'
const passwordInput = 'input[id="password"]'
const userNameInUserMenu = 'div[class="sc-8b815c14-0 ehPptE"]'
const siteCookiesAcceptBtn = 'button[id="pwa-consent-layer-accept-all-button"]'
const registerBtn = 'button[id="myaccount-dropdown-register-button"]'

class loginModal {
    static openUserMenu() {
        cy.get(userMenu).click()
    }

    static clickLoginBtn() {
        cy.get(loginBtn).click()
    }

    static clickLogoutBtn() {
        cy.get(logoutBtn).click()
    }

    static enterUserDetails(User) {
        if (User == "validUser") {
            cy.fixture('details').then((data) => {
                cy.get(emailInput).clear().type(data.validUser.email)
                cy.get(passwordInput).clear().type(data.validUser.password)
            });
        }
    }

    static clickLoginBtnInLoginModal() {
        cy.get(loginBtnInLoginModal).click()
    }

    static userMenuItems() {
        cy.fixture('details').then((data) => {
            cy.get(userNameInUserMenu).should('contain', data.validUser.userName)
        });
    }

    static acceptSiteCookies() {
        cy.get(siteCookiesAcceptBtn).click().wait(5000)
    }

    static getUserRegisterBtn() {
        cy.get(registerBtn).should('be.visible')
    }
}
export default loginModal
