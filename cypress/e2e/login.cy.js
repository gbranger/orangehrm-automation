Cypress.on('uncaught:exception',()=> {
  return false;
});


describe('Login Page', () => {

  beforeEach (() => {
    cy.viewport(1920, 1080)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })   


  it("TC001 - Login Screen acess", () => {
    cy.get('.oxd-text--h5').should('have.text','Login')

  })

  it("TC002 - Username field Alphanumeric Characters", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'testuser123')

  })

  it("TC003 - Password field Alphanumeric Characters", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'testuser123')

  })

  it("TC004 - Username field Special Characters", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('@#$$%!!!')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', '@#$$%!!!')

  })

  it("TC005 - Password field Alphanumeric Characters", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('@#$$%!!!')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', '@#$$%!!!')

  })

  it("TC006 - Login Button Behaviour without any data in Username and Password fields", () => {
    cy.wait(500)
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')

  })

  it("TC007 - Login Button Behaviour without any data in the Username field", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')

  })

  it("TC008 - Login Button Behaviour without any data in the Password field", () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')

  })

  it("TC009 - Forgot Password Behaviour", () => {
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-text--h6').should('have.text', 'Reset Password')

  })

  it("TC010 - Unsucessful login atempt", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testuser123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')

  })

  it("TC011 - Sucessful login atempt", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-title').should('be.visible')

  })

    
})