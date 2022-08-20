/// <reference types="Cypress" />

describe('Mouse Over and perform action on hidden element',function(){
    it('Click on hidden element after mouse over',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})