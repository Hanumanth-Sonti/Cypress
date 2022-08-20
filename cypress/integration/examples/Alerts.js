/// <reference types="Cypress" />
describe('Alert Handling', function()
{
    it('Handle Alerts and listen to browser events', function()
    {
        cy.visit('http://qaclickacademy.com/practice.php')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str) => {
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) => {
            expect(str).equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','rahulshettyacademy')

        cy.go('back')

    })
} )