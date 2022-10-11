///<reference types = "cypress"/>

it('demoqa site should open',() =>

{
    cy.once('uncaught:exception', () => false);
cy.visit('https://demoqa.com/')
cy.get(':nth-child(2) > :nth-child(1) > .card-body').click()
cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
cy.get('input[id=firstName]').type('Testing')
cy.get('#lastName').type('Demo')
cy.get('#userEmail').type('abc@abc.com')
cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()
cy.get('#userNumber').type('+92333455456')
cy.get('#dateOfBirthInput').click()
cy.get(':nth-child(3) > .react-datepicker__day--011').click()
cy.get('.subjects-auto-complete__value-container').type('Testing practice')

cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click()
cy.get('#currentAddress').type('abc')

}
)