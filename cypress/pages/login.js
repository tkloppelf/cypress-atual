class Login {
    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '.oxd-button',
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default Login