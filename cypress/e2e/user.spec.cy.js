import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  myInfoButton: '.oxd-topbar-header-breadcrumb > .oxd-text',
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
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First name')
    cy.get(selectorList.lastNameField).clear().type('Last name')
    cy.get(selectorList.employeeId).clear().type('Employee')
    cy.get(selectorList.otherId).clear().type('Other Id')
    cy.get(selectorList.driveNumber).clear().type('21125')
    cy.get(selectorList.licenseExpire).clear().type('2025-09-23')
    cy.get(selectorList.closeButton).click()
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