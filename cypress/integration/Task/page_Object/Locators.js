


class Locators{

    urlpage=function(location){
        return  cy.visit(
            `https://qatest.commentsoldrt.com/webstore-${location}?destination=/account`)
    }
    get First_name (){
        return cy.get('#customer-first-name')
    }

    get Last_name (){
        return cy.get('#customer-last-name')
    }

    get Email (){
        return cy.get('#customer-email')
    }

    get Password (){
        return cy.get('#customer-password')
    }

    get CreateBtn (){
        return cy.get('.ws-v2-button-primary.mt-2r')
    }

    get PhoneNo(){
        return cy.get('[class="phone-input-containers"] [class="default-input"]')
    }

    get confirmBtn(){
        return cy.get('#pink-button')
    }


    get CartValue(){
          //cart value
          return cy.get('#cart-button')
    }

    get AddToCart(){
        return cy.get(':nth-child(3) > .info-container > .mobile-container > .add-to-cart > .desktop')
    }
    get saveBtn(){
        return cy.get('#save-button')
    }

    get DeliveryBtn(){
        return cy.get('#one')
    }

    get DelAddFName(){
        return cy.get('[name="firstname"]')
    }

    get DelAddLname(){
        return cy,get('[name="lastname"]')
    }
    get DelAddLine1(){
        return cy.get('.shipping-input-containers > :nth-child(2) > .default-input')
    }

    get DelAddLine2(){
        return cy.get('.street-address-line-2 > .default-input')
    }
    get DelAddCity(){
        return cy.get('#locality')
    }

    get DelState(){
        return cy.get('.state > div > select')
    }
    get DelAddZip(){
        return cy.get('.zip-code > .default-input')
    }
    get DelCountry(){
        return cy.get('[autocomplete="country"]')
    }

    get DelAddSaveBtn(){
        return cy.get('#save-button')
    }

    get CreditButton(){
        return cy.get('#credit-card')
    }

    get CereditCrdNo(){
        return cy.get('.InputElement.is-empty.Input.Input--empty')
    }
    get AddCredCardBtn(){
        return cy.get('#stripe-button')
    }

    get payWithCard(){
        return cy.get('._cta-button')
    }

    


}

module.exports= new Locators;