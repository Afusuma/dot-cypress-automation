Cypress.on('uncaught:exception', () => {
  return false
})

describe('Login Tests', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/events/submit**', { statusCode: 200 })
    cy.visit('/', { failOnStatusCode: false })
  })

  it('Deve fazer login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface')
  })
})
