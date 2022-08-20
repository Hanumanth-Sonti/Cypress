/// <reference types="Cypress"/>
describe('Test API Responses',function(){
    it('Test Get API',function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php       ',
        {
            "name":"Hound of The BaskerVilles",
            "isbn":"spy",
            "aisle":"227",
            "author":"Sir Arthur Conan Doyle"            
        }).then(function(response)
        {
            print(response.body.author)
            expect(response.body).to.have.property('Msg','successfully added')
            expect(response.status).to.eq(200)
        })
    })
})