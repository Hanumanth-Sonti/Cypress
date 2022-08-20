
describe('My Dropdown Selections',function(){
    
    //it('Select Static dropdown',function(){
       // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //  cy.get('select').select('option2').should('have.value','option2')
    //})

    it('Select Dynamic dropdown',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').should('have.length',3)
        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            const val = $el.text()
            cy.log('Value: '+val)

            if(val === 'India'){
               cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

    })

})