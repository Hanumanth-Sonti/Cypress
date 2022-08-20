class HomePage{
    getEditBox(){
       return cy.get("input[name='name']:nth-child(2)");
    }
    
    getGender(){
        return cy.get('select');
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched');
    }

    getEnterprenuer(){
        return cy.get('#inlineRadio3');
    }

    getShopTab(){
        return cy.get(':nth-child(2) > a[class="nav-link"]')
    }

    clickCheckOut(){
        return cy.get('.nav-link.btn.btn-primary')
    }

}
export default HomePage;