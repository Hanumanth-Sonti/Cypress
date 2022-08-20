
/// <reference types="Cypress" />
describe('Test Framework',function(){
    beforeEach(function(){
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('Test_1',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("input[name='name']:nth-child(2)").clear()
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minLength',2)
        cy.get('#inlineRadio3').should('be.disabled')
    })

    it('Test_2',function(){
        //cy.pause()
        cy.log('Into second test')

        cy.get(':nth-child(2) > a[class="nav-link"]').click()
        cy.log(this.data.productName)
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        cy.get('.nav-link.btn.btn-primary').click() 
    })

   
})