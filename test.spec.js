/// <reference types="cypress"/>
it('it should login the application  ',() => {
    
    cy.fixture('example').then(function (data)
    {
        this.data = data 
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.login(this.data.username , this.data.password)
    
        cy.contains('Invalid Credentials').should(not.exist)
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').contains('Admin')  
    })
    
  
    
})
it('it should logout the application  ',() => {
    cy.once('uncaught:exception', () => false);

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})