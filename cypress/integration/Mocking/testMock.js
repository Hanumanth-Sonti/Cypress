/// <reference types="Cypress" />

describe('Test Mock Framework',function(){
    it('Mock response to find number of books',function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {
            statusCode: 200,
            body: [{
                    "book_name": "RobotFramework",
                    "isbn": "984353",
                    "aisle": "982053"
                  }]
        }).as('availablebooks')

        cy.get("button[class='btn btn-primary']").click()
        //cy.wait('@availablebooks').should('have.text',)
      
    })

})