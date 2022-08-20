/// <reference types="Cypress" />
describe('Radio button Selections', function()
{
    it('Check and Uncheck radio buttons', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[value='radio1']").should('be.visible')
        cy.get("input[value='radio1']").check().should('be.checked')

    })
} )