class Dashboard {
    selectorsList() {
        const selectors = {
             myInfoButton: '.oxd-topbar-header-breadcrumb > .oxd-text'
        }
       return selectors
    }

    checkDashboardPage () {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().myInfoButton).should('be.visible')
    }

}

export default Dashboard