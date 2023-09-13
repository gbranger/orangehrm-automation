Cypress.on('uncaught:exception',()=> {
  return false;
});


describe('Main Side Menu', () => {

  beforeEach (() => {
    cy.viewport(1920, 1080)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.wait(1000)

  })

  it("TC001 - Search tool testing - 1", () => {
    cy.get('.oxd-input').type('Admin')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Admin')

  })

  it("TC002 - Search tool testing - 2", () => {
    cy.get('.oxd-input').type('PIM')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','PIM')

  })

  it("TC003 - Search tool testing - 3", () => {
    cy.get('.oxd-input').type('Leave')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Leave')

  })

  it("TC004 - Search tool testing - 4", () => {
    cy.get('.oxd-input').type('Time')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Time')

  })

  it("TC005 - Search tool testing - 5", () => {
    cy.get('.oxd-input').type('Recruitment')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Recruitment')

  })

  it("TC006 - Search tool testing - 6", () => {
    cy.get('.oxd-input').type('My Info')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text','Personal Details')

  })
  
  it("TC007 - Search tool testing - 7", () => {
    cy.get('.oxd-input').type('Performance')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Performance')

  })

  it("TC008 - Search tool testing - 8", () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-main-menu-search > .oxd-input').type('Dashboard')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

  })

  it("TC009 - Search tool testing - 9", () => {
    cy.get('.oxd-input').type('Directory')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Directory')

  })

  it("TC010 - Search tool testing - 10", () => {
    cy.get('.oxd-input').type('Maintenance')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-text--h6').should('have.text','Administrator Access')

  })

  it("TC011 - Search tool testing - 11", () => {
    cy.get('.oxd-input').type('Claim')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Claim')

  })
  
  it("TC012 - Search tool testing - 12", () => {
    cy.get('.oxd-input').type('Buzz')
    cy.get('.oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Buzz')

  })
  
  it("TC013 - Side Menu Admin Button Click", () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Admin')

  })

  it("TC014 - Side Menu PIM Button Click", () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','PIM')

  })

  it("TC015 - Side Menu Leave Button Click", () => {
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Leave')

  })

  it("TC016 - Side Menu Time Button Click", () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Time')

  })

  it("TC017 - Side Menu Recruitment Button Click", () => {
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Recruitment')

  })

  it("TC018 - Side Menu My Info Button Click", () => {
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text','Personal Details')

  })
  
  it("TC019 - Side Menu Performance Button Click", () => {
    cy.get(':nth-child(7) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Performance')

  })

  it("TC020 - Side Menu Dashboard Button Click", () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.wait(1000)
    cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

  })

  it("TC021 - Side Menu Directory Button Click", () => {
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Directory')

  })

  it("TC022 - Side Menu Maintenance Button Click", () => {
    cy.get(':nth-child(10) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-text--h6').should('have.text','Administrator Access')

  })

  it("TC023 - Side Menu Claim Button Click", () => {
    cy.get(':nth-child(11) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Claim')

  })
  
  it("TC024 - Side Menu Buzz Button Click", () => {
    cy.get(':nth-child(12) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Buzz')

  })

  it("TC023 - Side Menu Claim Button Click", () => {
    cy.get(':nth-child(11) > .oxd-main-menu-item').click()
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Claim')

  })
  
  it("TC025 - Side Menu Collapse", () => {
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('not.be.visible')

  })

  it("TC026 - Side Menu Expansion", () => {
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click().wait(1000).click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible')

  })


})

