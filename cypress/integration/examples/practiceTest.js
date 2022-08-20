/// <reference types="Cypress" /
describe('Test Automation Suite',function(){
    it('Test Case1',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#product > tbody > tr > td:nth-child(2)').each(($el,index,$list) => {
            const textVal = $el.text()
            if(textVal.includes('Python'))
            {
                cy.get('#product > tbody > tr > td:nth-child(2)').eq(index).next().then(function(desc){
                    const description = desc.text()
                    cy.log(description)
                })
            }
        })
    })
    
})