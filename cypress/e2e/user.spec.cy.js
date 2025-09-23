import userData from '../fixtures/user-data.json'
import loginPage from '../pages/login'
import dashboard from '../pages/dashboard'


const login = new loginPage()
const dashboardPage = new dashboard()

describe('Orange HRM Tests', () => {

const selectorList = {
  firstNameField: '[name="firstName"]',
  lastNameField: '[name="lastName"]',
  employeeId: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  otherId: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
  driveNumber: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  licenseExpire: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
  closeButton: '.--close',
  saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
}

  it.only('User Info Updtade - Sucess', () => {
    login.acessLoginPage()
    login.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    //cy.get(selectorList.usernameField).type(userData.userSucess.username)
    //cy.get(selectorList.passwordField).type(userData.userSucess.password)
    //cy.get(selectorList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    //cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First name')
    cy.get(selectorList.lastNameField).clear().type('Last name')
    cy.get(selectorList.employeeId).clear().type('Employee')
    cy.get(selectorList.otherId).clear().type('Other Id')
    cy.get(selectorList.driveNumber).clear().type('21125')
    cy.get(selectorList.licenseExpire).clear().type('2025-09-23')
    cy.get(selectorList.closeButton).click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(12)').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get(':nth-child(3) > span').click()
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
    cy.get(selectorList.saveButton).click()


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get('.oxd-alert')
  })
})