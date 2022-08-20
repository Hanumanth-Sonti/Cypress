/// <reference types="Cypress" />
describe('My First Test Suite', function()
{
    it('My Third Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('ProductsLocator')
        cy.get('@ProductsLocator').find('.product').eq(2).contains("ADD TO CART").click().then(function(){
            console.log('Add To Cart Clicked')
        })
        cy.get('@ProductsLocator').find('.product').each(($e1,index,$list) => {
            const strVeg = $e1.find('h4.product-name').text()
            if(strVeg.includes("Cashews")){
                cy.wrap($e1).find('button').click()
            }
        })
        cy.get('a.cart-icon > img').click()
        cy.get('div.action-block > button').contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

} )