/// <reference types="Cypress" />
describe('My First Test Suite', function()
{
    it('My Second Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').as('ProductsLocator')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('@ProductsLocator').find('.product').should('have.length',4)
        cy.get('@ProductsLocator').find('.product').eq(2).contains("ADD TO CART").click().then(function(){
            console.log('Add To Cart Clicked')
        })
        cy.get('@ProductsLocator').find('.product').each(($e1,index,$list) => {
            const strVeg = $e1.find('h4.product-name').text()
            if(strVeg.includes("Cashews")){
                cy.wrap($e1).find('button').click()
            }
        })

        cy.get('.brand').should('have.text',"GREENKART")
        cy.get('.brand').then((logoElement) =>{
            cy.log(logoElement.text())
        })
    })

} )