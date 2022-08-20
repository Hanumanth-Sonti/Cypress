///<reference types="Cypress"/>

describe('Test Mock Framework',function(){
    it('Test Mock Request',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=ronald'
            req.continue((res) => {
                expect(res.statusCode).to.equal(404)
            })
        }).as('AvailableBooks')

        //Click Virtual Library
        cy.get("button[class='btn btn-primary']").click()

        cy.wait('@AvailableBooks')
    })

    it('Test Mock Response',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        },{
            statusCode: 200,
            body: [{
                "book_name": "null",
                "isbn": "SPY40",
                "aisle": "2529857"
              },
              {
                "book_name": "RobotFramework",
                "isbn": "984353",
                "aisle": "982053"
              }]
        }).as('GetBooksByAuthor')

         //Click Virtual Library
         cy.get("button[class='btn btn-primary']").click()
        
         cy.wait('@GetBooksByAuthor').should(({request,response}) =>
         {
            cy.get('tr').should('have.length',response.body.length+1)
         })

    })
})